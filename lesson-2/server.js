/**
 * 套用lesson-1的server.js
 */
const Vue = require('vue')
const server = require('express')()
const vueServerRenderer = require('vue-server-renderer')
const fs = require('fs')

// 引入生成实例器
const createApp = require('./app')

// html模板（页面模板）
const template = fs.readFileSync('./index.template.html', 'utf-8')
// 将模板传入渲染器中
const render = vueServerRenderer.createRenderer({
  template,
})

// 页面模板中的插值对象
const innerObj = {
  title: '我是插入的标题',
  meta: `
    <meta charset="utf-8">
    <meta content="我是插入的meta标签">
  `
}

server.get('*', (req, res) => {
  // 实例的上下文对象
  const context = {
    url: req.url
  }
  // 创建Vue实例
  const app = createApp(context)
  // Vue实例中的template会插入到页面模板中
  // html参数是页面模板 + 注入模板
  render.renderToString(app, innerObj, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    // 返回拼装好的html
    // 注意，返回的页面中是没有任何Vue相关的东西的，可打开控制台查看
    res.end(html)
  })
})

server.listen(3000)