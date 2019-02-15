/**
 * 扩展 notification 组件的配置
 */

import Notification from './notification.vue'

// 这和 mixins 类似，扩展组件
export default {
  extends: Notification, // 要扩展的组件
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`,
        'z-index': '9999'
      }
    }
  },
  data () {
    return {
      verticalOffset: 0, // 垂直位移样式
      autoCloseTime: 3000, // 自动关闭的时间
      timer: null, // 定时器
      height: 0, // 容器高度，用于点击关闭后，其他容器向下移动
      visible: false // 覆盖原组件的 visible，挂在后设置为 true，触发 transition 的 after enter 事件
    }
  },
  methods: {
    // 开启定时器，指定时间关闭组件
    createTimer () {
      if (this.autoCloseTime) {
        console.log('createTimer')
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoCloseTime)
      }
    },
    // 关闭定时器
    clearTimer () {
      if (this.timer) {
        console.log('clearTimer')
        clearTimeout(this.timer)
      }
    },
    // 进入时获取容器高度
    handleAfterEnter () {
      this.height = this.$el.offsetHeight
    }
  },
  mounted () {
    this.createTimer()
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
