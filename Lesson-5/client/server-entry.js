/**
 * 说明：
 * 1. 创建 Vue 实例并导航到对应路由
 * 2. context 是从 server-render.js 传过来的
 */

import createApp from './create-app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    // 同步状态到前端
    if (context.user) {
      store.state.mA.user = context.user
    }

    router.push(context.url) // 将请求的路径推入 router，即触发了该路由的渲染

    router.onReady(() => { // 当路由加载的一切都准备好后，进行其他操作
      const matchedComponents = router.getMatchedComponents() // 获取路由下匹配的组件，只包含最上层组件，即路由组件
      if (!matchedComponents.length) {
        reject(new Error('no matched component'))
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            route: router.currentRoute,
            router, // 用于重定向
            store
          })
        }
      })).then(() => {
        context.state = store.state // 把状态引入到上下文中，放到 html 里
        context.router = router // 用于重定向
        // 上下文会传回到 server-render.js 中
        resolve(app) // 此时渲染的 html 就带有 todo 列表的内容了
      })
    })
  })
}
