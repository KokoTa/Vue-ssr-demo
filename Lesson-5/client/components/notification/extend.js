/**
 * 通过配置文件生成实例并挂在
 */

import Vue from 'vue'
import extendConfig from './extend-config'

// 扩展得到一个构造函数
const NotificationConstructor = Vue.extend(extendConfig)
// 我们知道，消息通知是一个接一个弹出来的，用一个数组来存储
let instances = []
// 每个实例都要设置唯一标识符
let id = 1

// console.warn('notify import') // 测试 notify 这个 js 引入的次数，测试结果为只有一次

// 删除实例函数
const removeInstance = (instance) => {
  if (!instance) return
  const length = instances.length
  const index = instances.findIndex(item => item.id === instance.id)

  instances.splice(index, 1)

  // 删除实例后，该实例后续的节点要向下滑动
  if (length <= 1) return // 无后续节点
  const removeHeight = instance.height + 16

  for (let i = index; i < length - 1; i++) {
    instances[i].verticalOffset = instances[i].verticalOffset - removeHeight
  }
}

// 生成实例函数
const notify = (options) => {
  if (Vue.prototype.$isServer) return // 如果是在服务端环境，则不使用该插件

  const { autoCloseTime, ...rest } = options

  let instance = new NotificationConstructor({
    propsData: rest, // 传递 props
    data: {
      autoCloseTime: autoCloseTime || 3000
    }
  })

  const instanceId = `notification_${id++}`
  instance.id = instanceId
  instance = instance.$mount() // 在文档之外挂载渲染，没挂载的话是没有 $el 属性的
  document.body.appendChild(instance.$el) // 挂载到 body 上
  instance.visible = true

  // 设置样式
  let verticalOffset = 0 // 当前实例垂直位移距离
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset // 该值直接是设置到实例的 data 里的

  // 监听事件并处理
  instance.$on('close', () => {
    instance.visible = false // 关闭后待过渡动画结束后会触发 closed
  })
  instance.$on('closed', () => {
    removeInstance(instance) // 移除数组
    document.body.removeChild(instance.$el) // 销毁DOM
    instance.$destroy() // 销毁实例
  })

  instances.push(instance)
  return instance
}

export default notify
