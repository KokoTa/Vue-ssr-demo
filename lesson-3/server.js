/**
 * 后端渲染（不包含 Ajax 数据）
 */
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
server.use(express.static('dist'))

// 打包 entry-server.js 后生成 dist/server.js，用它做入口文件
const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8')
// 获取模板，dist/index.ssr.html 是打包后生成的
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8')
// 获取渲染器
const vueServerRenderer = require('vue-server-renderer')
// createBundleRenderer 需要一个入口文件，即 bundle
const render = vueServerRenderer.createBundleRenderer(bundle, {
  template
})

// 从入口文件中获取实例生成器
const createApp = require(path.resolve(__dirname, 'dist/server.js'))

server.get('/index', (req, res) => {
  // 生成实例
  const app = createApp()
  // 开始渲染
  render.renderToString(app, (err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('服务器异常')
      return
    }
    // 我们发现我们渲染的模板是 index.ssr.html 而不是 index.html
    res.end(html)
  })
})

server.listen(3000, () => console.log('服务器已启动'))