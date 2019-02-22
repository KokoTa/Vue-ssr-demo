<template>
  <div class="todo">
    <div class="mask" />
    <div class="content">
      <Header />
      <Main />
      <Footer />

      <!-- <notification content="test" /> -->
      <button @click="notify">
        get notify
      </button>

      <!-- tabs示例 -->
      <tabs
        :value="tabValue"
        @change="handleChange"
      >
        <tab
          label="tab1"
          index="1"
        >
          <article>content1</article>
        </tab>
        <tab index="2">
          <span slot="label">
            tab2
          </span>
          <article>content2</article>
        </tab>
        <tab
          label="tab3"
          index="3"
        >
          <article>content3</article>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import Header from './views/Header'
import Main from './views/Main'
import Footer from './views/Footer'

export default {
  components: {
    Header,
    Main,
    Footer
  },
  data () {
    return {
      tabValue: '1'
    }
  },
  methods: {
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    },
    handleChange (index) {
      console.log(index)
      this.tabValue = index
    }
  },
  // 见 server-entry.js，此文件调用了该方法
  // 总之该方法是在后端调用的
  asyncData ({ store }) {
    // 用户登录了才发送请求
    if (store.state.mA.user) {
      return store.dispatch('fetchTodos')
    }
    return Promise.resolve()
  }
}
</script>

<style lang="scss" scoped>
.todo {
  height: 100%;
  overflow: hidden;
  .mask,
  .content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .mask {
    background: url("../assets/images/1.jpg") center/cover no-repeat;
    filter: blur(3px);
    z-index: 1;
  }
  .content {
    z-index: 2;
  }
}
</style>
