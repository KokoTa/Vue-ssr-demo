<template>
  <div class="bar">
    <p>Bar.vue</p>
    <span>我得到了数据：{{ bar }}</span>
  </div>
</template>

<script>
export default {
  // 此函数在后端调用，这个store是后端的
  asyncData({ store }) {
    return store.dispatch('fetchBar')
  },
  computed: {
    bar() {
      // 这个store是前端的
      return this.$store.state.bar
    }
  },
  created() {
    console.log('bar created')
  }
}
</script>


<style>
  .bar {
    color: red;
  }
</style>
