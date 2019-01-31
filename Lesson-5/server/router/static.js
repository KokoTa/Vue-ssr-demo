const Router = require('koa-router')
const KoaSend = require('koa-send')

// 针对静态文件路由做处理，请求该前缀下的路由的文件就直接返回
const router = new Router({ prefix: '/client-build' })

router.get('/*', async (ctx) => {
  await KoaSend(ctx, ctx.path)
})

module.exports = router
