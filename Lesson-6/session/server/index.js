const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const Session = require('koa-session')
const BodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // * 解析 body(必须放在路由初始化之前)
  app.use(BodyParser())
  // * 设置 Key
  app.keys = ['KokoTa']
  // * 设置 Session(必须放在路由初始化之前)
  const CONFIG = {
    key: app.keys[0] /** (string) cookie key (default is koa:sess) */,
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 10000, // * 有效期设为10秒，比较容易看出效果
    autoCommit: true /** (boolean) automatically commit headers (default true) */,
    overwrite: true /** (boolean) can overwrite or not (default true) */,
    httpOnly: true /** (boolean) httpOnly or not (default true) */,
    signed: true /** (boolean) signed or not (default true) */,
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
    renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  }
  app.use(Session(CONFIG, app))
  // * 路由初始化
  app.use(router.routes()).use(router.allowedMethods())

  // * 设置登录和登出路由
  router.post('/api/login', async ctx => {
    const { username, password } = ctx.request.body
    if (username && password) {
      ctx.session.user = username
      ctx.body = {
        msg: 'login ok',
        user: username
      }
    } else {
      ctx.throw(401)
    }
  })
  router.post('/api/loginout', async ctx => {
    delete ctx.session.user
    ctx.body = {
      msg: 'loginout ok'
    }
  })

  // * 其他路由走这里
  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    // * Koa-session 把 session 放在 ctx 上了，这里需要修改，让 nuxtServerInit 可以正常运行
    ctx.req.session = ctx.session
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
