/**
 * 说明：
 * 1. 启动一个服务器，每次请求时监听对应路由
 * 2. 根据不同路由返回一个应用实例
 */
const path = require('path')
const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaSession = require('koa-session')
const KoaSend = require('koa-send')
const app = new Koa()

// 路由
const staticRouter = require('./router/static')
const apiRouter = require('./router/api')
const userRouter = require('./router/user')

// 云端配置
const dbInit = require('./db/db.js')
const dbConfig = require('../app.config.js').db
const dbRequestHandle = dbInit(dbConfig.appId, dbConfig.appKey)

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
const isDev = process.env.NODE_ENV === 'development'

// 解析 body
app.use(KoaBody())

// 配置 session，前端的这种 session 机制和后端的不同，前者不能在服务端进行主动过期，必须等到时间到了才会过期
app.keys = ['secret key'] // 用于加密
const config = {
  key: 'ssr-session', // session 名
  maxAge: 2 * 60 * 60 * 1000 // 2 小时后过期
}
app.use(KoaSession(config, app))

// 对 /favicon.ico 进行处理，利用 koa-send 返回图标给客户端
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await KoaSend(ctx, '/favicon.ico', { roote: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

// 挂载云端操作到上下文
app.use(async (ctx, next) => {
  ctx.db = dbRequestHandle
  await next()
})

// 挂载路由
app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

let pageRouter
if (isDev) {
  // pageRouter = require('./router/dev-router')
  pageRouter = require('./router/dev-router-no-bundle')
} else {
  pageRouter = require('./router/pro-router')
}
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
