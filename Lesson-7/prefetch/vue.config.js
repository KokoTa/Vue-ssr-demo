const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// build 时候才用到 Render
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // 编译后html需要存放的路径
        staticDir: path.join(__dirname, './dist'),
        // 列出需要预渲染的路由
        routes: ['/list'],
        renderer: new Renderer({
          headless: false,
          renderAfterDocumentEvent: 'render-event'
        })
      })
    ]
  }
}