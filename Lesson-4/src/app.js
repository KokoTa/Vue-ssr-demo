/**
 * app.js 简单地使用 export 导出一个 createApp 函数
 * 添加路由
 */
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // 创建 router 实例
  const router = createRouter()
  const app = new Vue({
    // 注入 router
    router,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router }
}