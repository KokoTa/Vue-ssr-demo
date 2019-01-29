/**
 * 说明：
 * 1. 创建 Vue 实例并对其进行操作
 * 2. context 是传入的上下文对象
 */

import createApp from './create-app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url) // 将请求的路径推入 router，即触发了该路由的渲染

    router.onReady(() => { // 当路由加载的一切都准备好后，进行其他操作
      const matchedComponents = router.getMatchedComponents() // 获取路由下匹配的组件
      console.log('matchedComponents', matchedComponents)
      if (!matchedComponents.length) {
        reject(new Error('no matched component'))
      }
      resolve(app)
    })
  })
}
