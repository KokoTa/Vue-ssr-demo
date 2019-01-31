/**
 * 说明：
 * 1. 启动一个服务器，每次请求时监听对应路由
 * 2. 根据不同路由返回一个应用实例
 */
const path = require('path')
const Koa = require('koa')
const KoaSend = require('koa-send')
const app = new Koa()
const pageRouter = require('./router/dev-router')

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
const isDev = process.env.NODE_ENV === 'development'

// 对 /favicon.ico 进行处理，利用 koa-send 返回图标给客户端
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await KoaSend(ctx, '/favicon.ico', { roote: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

// 挂载路由
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

// 全局捕获错误中间件
app.use(async (ctx, next) => {
  try {
    console.log('path: ' + ctx.request.path)
    next()
  } catch (err) {
    ctx.status = 500
    if (isDev) {
      ctx.body = err
    } else {
      ctx.body = 'try again?'
    }
  }
})

app.listen(PORT, HOST, () => {
  console.log('server running at ' + PORT)
})
