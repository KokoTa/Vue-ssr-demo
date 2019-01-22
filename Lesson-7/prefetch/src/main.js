import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/spaPages/home') },
  { path: '/list', component: () => import('@/prerenderPages/list') },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // mounted () {
  //   // You'll need this for renderAfterDocumentEvent.
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')
