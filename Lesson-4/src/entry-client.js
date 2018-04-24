/**
 * 客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中
 */
import { createApp } from './app'
// 客户端特定引导逻辑……
const { app, router, store } = createApp()

// 在挂载前，拿到预获取的数据
if (window.__INITIAL_STATE__) {
  // 把数据赋给前端状态
  store.replaceState(window.__INITIAL_STATE__)
}

// 路由准备好后再挂载
// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount('#app')
})