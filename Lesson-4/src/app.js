/**
 * app.js 简单地使用 export 导出一个 createApp 函数
 * 添加路由
 */
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // 创建 router 实例
  const router = createRouter()
  // 创建 store 实例
  const store = createStore()
  // 路由改变时将路由信息同步到状态上，同步的数据放在state.route上
  //  {
  //       path: '',
  //       query: null,
  //       params: null
  //   }
  sync(store, router)

  const app = new Vue({
    // 注入 router
    router,
    // 注入 store
    store,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  // 暴露 app, router 和 store。
  return { app, router, store }
}