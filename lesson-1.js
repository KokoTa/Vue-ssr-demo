const Vue = require('vue')
const server = require('express')()
const render = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  // 创建Vue实例
  const app = new Vue({
    data: {
      msg: '你好'
    },
    template: '<div>{{ msg }}</div>'
  })
  // 渲染Vue实例, html是实例的template
  render.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Server Error')
      return
    }
    // 返回拼装好的html
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head> 
          <meta charset="utf-8">
          <title>Hello</title>
        </head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(3000)