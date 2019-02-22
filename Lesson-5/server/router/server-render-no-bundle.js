/**
 * 说明：
 * 1. 生成内容
 * 2. 内容注入到 html 模板
 * 3. 返回给客户端
 */

const ejs = require('ejs')

module.exports = async (ctx, renderer, template, bundle) => {
  ctx.headers['content-type'] = 'text/html' // 设置返回内容类型

  // 渲染上下文
  const context = {
    url: ctx.path,
    user: ctx.session.user // 把用户信息放到上下文，然后在渲染时把该数据传入进去，见 server-entry.js
  }

  try {
    // ! 这里等于是把构建步骤拆成了两步
    const app = await bundle(context)

    // 如果用户未登录，即未登录时改变了路径导致实际路径和上下文路径不同，那么就进行重定向
    console.log(context.router.currentRoute.fullPath, ctx.path)
    if (context.router.currentRoute.fullPath !== ctx.path) {
      return ctx.redirect(context.router.currentRoute.fullPath)
    }

    const appString = await renderer.renderToString(app, context) // ! 把最耗费资源的代码放在后面

    const html = ejs.render(template, { // 注入内容到模板
      appString,
      style: context.renderStyles(), // 传入 renderToString 后，context 新增了一些 render 方法
      scripts: context.renderScripts(),
      initialState: context.renderState()
    })

    ctx.body = html
  } catch (err) {
    console.log('render error: ', err)
    throw err
  }
}
