// 注册为全局组件
import Notification from './notification.vue'
// 自动生成该组件的函数
import notify from './extend'

// 可以不用写 install 方法
export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
