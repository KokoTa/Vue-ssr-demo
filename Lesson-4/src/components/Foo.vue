<template>
  <div class="foo">
    <h2>Foo.vue</h2>
    <span>{{ item }}</span>
  </div>
</template>

<script>
export default {
  // 注意，由于此函数会在组件实例化之前调用，所以它无法访问 this
  // 需要将 store 和路由信息作为参数传递进去
  // 这个函数是在后端触发的
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    console.log(route.params)
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    // 这个 store 是 entry-client 中创建的 store
    item () {
      console.log(this.$store.state.items)
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>

<style>
.foo {
  color: red;
}
</style>
