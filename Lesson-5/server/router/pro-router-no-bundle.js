/**
 * 说明：
 * 1. 思路和 dev-router.js 一样，不同之处在于 json 文件已经提前编译好了，直接引用即可
 * 2. 记得修改输出目录名，注意文件对应关系
 * PS：该文件用于生产环境
 */

const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const VueServerRender = require('vue-server-renderer')

const serverRender = require('./server-render-no-bundle')
const bundle = require('../../server-build/server-entry.js').default
const clientManifest = require('../../client-build/vue-ssr-client-manifest.json')

// renderer、template 放在方法外面了，因为引用的文件内容是固定的，不像开发环境下引用的文件会因为热更新而变化
const renderer = VueServerRender.createRenderer(
  {
    inject: false,
    clientManifest
  }
)
const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')

const handleSSR = async (ctx) => {
  await serverRender(ctx, renderer, template, bundle) // 内容生成
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
