/**
 * 说明：
 * 1. 服务器启动
 * 2. 通过服务端 wepack 对 server-entry.js 进行构建，构建后生成一个 json 文件
 * 3. 得到服务端构建出来的 json 文件
 * 4. 路由监听到请求，执行服务端渲染函数 handleSSR
 * 4. 获取客户端构建出来的 json 文件
 * 5. 结合两个 json 生成 renderer
 * 6. 将 renderer、template 传递给 serverRender 进行最后的内容生成
 * 7. 返回给客户端
 * PS：该文件使用在开发环境
 */

const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const axios = require('axios')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const VueServerRender = require('vue-server-renderer')

const serverRender = require('./server-render')
const webpackServerConfig = require('../../webpack.config.server')
const webpackServerCompiler = webpack(webpackServerConfig)
const mfs = new MemoryFs() // 和 fs 一样，但不写入磁盘，而是写入内存
webpackServerCompiler.outputFileSystem = mfs // 将文件输出到内存

let bundle // 打包出来的服务端渲染文件
webpackServerCompiler.watch({}, (err, stats) => { // 监听 server-entry.js 变动，每次文件变动都执行打包
  if (err) throw err
  stats = stats.toJson() // 有时候报错并不会在 err 里，而是在 stats 里
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    webpackServerConfig.output.path,
    'vue-ssr-server-bundle.json' // vue-server-renderer 默认输出的文件名
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8')) // 不设置编码默认为二进制

  console.log('new bundle created')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = '服务端文件构建中...'
    return
  }

  const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')
  // 在开发时，我们需要获取 client 服务器生成的 client json 文件，由于是动态生成的，这里我们直接请求 client server 来获取
  const clientRequest = await axios.get(
    'http://127.0.0.1:8000/client-build/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientRequest.data
  const renderer = VueServerRender.createBundleRenderer(bundle, {
    inject: false, // 不让插件帮我们注入，自动注入具有局限性
    clientManifest
  })

  await serverRender(ctx, renderer, template) // 内容生成
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
