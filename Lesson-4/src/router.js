/**
 * 客户端和服务端使用相同路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Foo from './components/Foo'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/index',
        components: Foo,
      },
      {
        path: '*',
        redirect: '/index'
      }
    ]
  })
}