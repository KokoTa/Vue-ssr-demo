import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'
import App from './App'
import createRouter from './router/router'
import createStore from './store/store'

import './assets/styles/style.scss'

Vue.use(VueRouter) // 使用 vue-router
Vue.use(Vuex) // 使用 vuex

const router = createRouter() // 创建一个 vue-router 实例
const store = createStore() // 创建一个 vue-router 实例

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
