/**
 * 说明：
 * 1. 生成一个 Vue 实例
 * 2. 返回给客户端
 * 3. 路由准备好后挂载该实例
 * 4. 该代码和 index.js 直接挂载实例略有不同，前者每次请求路由都会返回一个新的实例，后者返回一个单页应用实例(状态具有持久性)
 * 5. ssr 渲染时记得修改构建文件入口为该文件
 * 6. 如果只是单独构建前端(入口为该文件或index.js，不构建后端)，并想从 8000 端口访问实例，那么需要注释掉 publicPath，否则加载不到外链
 */
import createApp from './create-app'
import bus from './util/bus'

const { app, router } = createApp()

// 监听事件，跳转到登录页
bus.$on('auth', () => {
  router.push('/Login')
})

router.onReady(() => {
  app.$mount('#app')
})
