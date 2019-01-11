import VueRouter from 'vue-router'
import routes from './routes'

// 因为服务端渲染会产生一个新的APP，而这个APP对应的路由也需要是一个新的实例
export default () => {
  return new VueRouter({
    mode: 'history', // SEO不能使用hash路由
    routes
  })
}
