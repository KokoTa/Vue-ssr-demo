import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import createRouter from './router/router'

import './assets/styles/style.scss'

Vue.use(VueRouter) // 使用 vue-router

const router = createRouter() // 创建一个 vue-router 实例

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
