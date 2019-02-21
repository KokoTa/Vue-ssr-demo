/**
 * 用户登录路由
 */
const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter
  .post('/login', async (ctx) => {
    const user = ctx.request.body
    if (user.username === 'KokoTa' && user.password === '123') {
      ctx.session.user = user
      ctx.body = {
        success: true,
        data: user
      }
    } else {
      ctx.status = 400
      ctx.body = {
        suceess: false,
        message: 'bad user'
      }
    }
  })

module.exports = userRouter
