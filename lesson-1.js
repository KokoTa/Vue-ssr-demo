const Vue = require('vue')
const server = require('express')()
const vueServerRenderer = require('vue-server-renderer')
const fs = require('fs')

// html模板（页面模板）
const template = fs.readFileSync('./index.template.html', 'utf-8')
// 将模板传入渲染器中
const render = vueServerRenderer.createRenderer({
  template,
})

server.get('*', (req, res) => {
  // 创建Vue实例
  const app = new Vue({
    data: {
      msg: '你好'
    },
    template: '<div>{{ msg }}</div>' // 注入模板
  })
  // Vue实例中的template会插入到模板中
  // html参数是页面模板 + 注入模板
  render.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    // 返回拼装好的html
    res.end(html)
  })
})

server.listen(3000)