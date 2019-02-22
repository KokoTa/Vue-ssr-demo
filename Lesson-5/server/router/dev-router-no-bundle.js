/**
 * 在路由重定向中，我们发现我们需要先构建之后才会执行重定向操作
 * 这会引起性能问题，因为构建后如果重定向了，那么构建这个耗时的步骤就是多余的了
 */

const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const axios = require('axios')
// const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const VueServerRender = require('vue-server-renderer')

// ! node 自带的原生模块，用于生成 CommonJS 规范的模块代码
// const NativeModule = require('module')
// const VM = require('vm')

const serverRender = require('./server-render-no-bundle') // ! 改变引用文件
const webpackServerConfig = require('../../webpack.config.server')
const webpackServerCompiler = webpack(webpackServerConfig)
// const mfs = new MemoryFs() // 和 fs 一样，但不写入磁盘，而是写入内存
// webpackServerCompiler.outputFileSystem = mfs // 将文件输出到内存

let bundle // ! bandle 是一个函数
webpackServerCompiler.watch({}, (err, stats) => { // 监听 server-entry.js 变动，每次文件变动都执行打包
  if (err) throw err
  stats = stats.toJson() // 有时候报错并不会在 err 里，而是在 stats 里
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    webpackServerConfig.output.path,
    'server-entry.js' // ! 这里我们直接使用的是源文件，而不是 json 文件
  )

  // ! 将内存文件读取为字符串并变为一个 module 来使用
  // ! 这是由于使用了 MemoryFS 的情况，正式环境中直接读取输出文件即可，其配置如下
  delete require.cache[bundlePath] // 重复构建时包会有缓存，要清除缓存
  bundle = require('../../server-build/server-entry.js').default // 引入已经打包好的文件
  // try {
  //   const m = { exports: {} }
  //   const bundleStr = mfs.readFileSync(bundlePath, 'utf-8') // 不设置编码默认为二进制，设置后根据编码获得字符串
  //   const wrapper = NativeModule.wrap(bundleStr) // 字符串封装成 module 格式
  //   const script = new VM.Script(wrapper, { // 设置一个自定义脚本
  //     filename: 'server-entry.js', // 自定义堆栈文件名
  //     displayError: true
  //   })
  //   const result = script.runInThisContext(script) // 执行该脚本
  //   result.call(m.exports, m.exports, require, m) // 编译赋值给 m
  //   bundle = m.exports.default // 拿到实际 js 代码
  // } catch (err) {
  //   console.error('compile js error: ', err)
  // }

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
  const renderer = VueServerRender.createRenderer({ // ! 使用 createRenderer 而不是 createBundleRender
    inject: false, // 不让插件帮我们注入，自动注入具有局限性
    clientManifest
  })

  await serverRender(ctx, renderer, template, bundle) // ! 内容生成，传入 bundle
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
