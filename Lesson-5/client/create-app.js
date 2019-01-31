/**
 * 说明：
 * 1. 服务端需要返回应用实例
 * 2. 如果不返回实例则会发生共享数据和内存溢出的问题
 * 3. 该文件用于生成单例(单个实例)
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import App from './App'
import createRouter from './router/router'
import createStore from './store/store'

import './assets/styles/style.scss'

Vue.use(VueRouter) // 使用 vue-router
Vue.use(Vuex) // 使用 vuex
Vue.use(Meta) // 使用 vue-meta

export default () => {
  const router = createRouter() // 创建一个 vue-router 实例
  const store = createStore() // 创建一个 store 实例
  const app = new Vue({ // 创建一个 vue 实例
    router,
    store,
    render: h => h(App)
  })

  return { router, store, app }
}
