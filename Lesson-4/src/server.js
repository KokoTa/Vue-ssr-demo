/**
 * 服务器启动文件
 */
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')
server.use(express.static('dist'))
server.use(favicon(path.join(__dirname, 'favicon.ico')))

// createBundleRenderer 入口文件，即打包后的 entry-server.js
// 详情https://ssr.vuejs.org/zh/bundle-renderer.html 和 https://ssr.vuejs.org/zh/build-config.html
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// createBundleRenderer 配置文件，即打包后的 client-server.js
// https://ssr.vuejs.org/zh/build-config.html
const clientManifest  = require('./dist/vue-ssr-client-manifest.json')

// html模板
const template = fs.readFileSync(path.resolve(__dirname, './index.ssr.html'), 'utf-8')

// 获取渲染器
const vueServerRenderer = require('vue-server-renderer')
const render = vueServerRenderer.createBundleRenderer(serverBundle, {
  template, // （可选）页面模板
  runInNewContext: false, // 推荐
  clientManifest, // （可选）客户端构建 manifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  // 新建实例 -> 查找路由 -> 匹配路由和组件 -> 返回实例 -> 进行渲染
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  render.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

server.listen(3000, () => console.log('服务器启动'))