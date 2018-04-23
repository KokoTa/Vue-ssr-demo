/**
 * 客户端和服务端使用相同路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

const Foo = () => import('./components/Foo.vue')  // 路由懒加载需要用到 babel-plugin-syntax-dynamic-import 插件
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/index',
        component: Foo,
      },
    ]
  })
}