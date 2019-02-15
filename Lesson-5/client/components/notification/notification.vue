<template>
  <transition
    name="fade"
    @after-leave="handleAfterLeave"
    @after-enter="handleAfterEnter"
  >
    <!-- style 由 extend 来传入覆盖 -->
    <div
      v-show="visible"
      class="notification"
      :style="style"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="notification-content">
        {{ content }} - {{ message }}
      </span>
      <a
        class="notification-close"
        @click.prevent="handleClose"
      >
        {{ btn }}
      </a>
    </div>
  </transition>
</template>

<script>
/**
 * 通知组件，将全局注册
 */
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      message: 'abc',
      visible: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleAfterLeave () {
      this.$emit('closed')
    },
    handleAfterEnter () {},
    createTimer () {},
    clearTimer () {}
  }
}
</script>

<style lang="scss" scoped>
.notification {
  width: 300px;
  line-height: 40px;
  background: #000;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  transition: .5s ease;

  .notification-content {
    flex: 1;
    color: #fff;
  }
  .notification-close {
    color: orange;
  }
}
</style>
