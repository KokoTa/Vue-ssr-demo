<template>
  <div class="foo">
    <p>Foo.vue</p>
    <span>我得到了数据：{{ foo }}</span>
  </div>
</template>

<script>
export default {
  // 此函数在后端调用
  asyncData({ store }) {
    return store.dispatch('fetchFoo')
  },
  computed: {
    foo() {
      return this.$store.state.foo
    }
  },
  created() {
    console.log('foo created')
  }
}
</script>


<style>
  .foo {
    color: blue;
  }
</style>
