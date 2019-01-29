/**
 * 说明：
 * 1. 传递上下文生成内容
 * 2. 注入内容到 html 模板
 * 3. 返回给客户端
 */

const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['content-type'] = 'text/html' // 设置返回内容类型

  // 渲染上下文
  const context = {
    url: ctx.path
  }

  try {
    const appString = await renderer.renderToString(context) // context 传入 server-entry.js，渲染的到内容
    const html = ejs.render(template, { // 注入内容到模板
      appString,
      style: context.renderStyles(), // 传入 renderToString 后，context 新增了一些 render 方法
      scripts: context.renderScripts()
    })

    ctx.body = html
  } catch (err) {
    console.log('render error: ', err)
    throw err
  }
}
