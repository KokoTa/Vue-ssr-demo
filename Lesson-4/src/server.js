/**
 * 服务器启动文件
 */
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
server.use(express.static('dist'))

// 获取模板，dist/index.ssr.html 是打包生成的
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8')
// 获取渲染器
const vueServerRenderer = require('vue-server-renderer')
// createBundleRenderer 需要一个入口文件，即 bundle
const render = vueServerRenderer.createRenderer({
  template
})

// 此文件是打包后的entry-server文件
const createApp = require('./dist/server.js').default

server.get('*', (req, res) => {
  const context = { url: req.url }
  createApp(context).then(app => {
    render.renderToString(app, (err, html) => {
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
})

server.listen(3000, () => console.log('服务器启动'))