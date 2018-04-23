/**
 * 后端渲染（包含 Ajax 数据）
 */
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
server.use(express.static('dist'))

// 打包 entry-server.js 后生成 dist/server.js，用它做入口文件，生成Vue实例
const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8')
// 获取模板，dist/index.ssr.html 是打包生成的
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8')
// 获取渲染器
const vueServerRenderer = require('vue-server-renderer')
// createBundleRenderer 需要一个入口文件，即 bundle
const render = vueServerRenderer.createBundleRenderer(bundle, {
  template
})

server.get('/index', (req, res) => {
  // 开始渲染
  render.renderToString((err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('服务器异常')
      return
    }
    // 注意渲染的模板是 index.ssr.html
    res.end(html)
  })
})

server.listen(3000, () => console.log('服务器渲染已启动：3000'))

/**
 * 前端渲染
 */
const server2 = express()
server2.use(express.static('dist'))

server2.get('/index', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
  res.end(html)
})

server2.listen(3001, () => console.log('浏览器渲染已启动：3001'))

/**
 * 从上面我们知道：
 * 后端渲染是模板插值，返回已经渲染完成的页面
 * 前端渲染是返回模板，然后由js动态生成页面
 */