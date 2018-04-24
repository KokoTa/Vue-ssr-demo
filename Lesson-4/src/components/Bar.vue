<template>
  <div class="bar">
    <h2>Bar.vue</h2>
    <span>{{ userName }}</span>
  </div>
</template>

<script>
export default {
  asyncData({store, route}) {
    return store.dispatch('fetchItem2', 'KokoTa')
  },
  computed: {
    userName() {
      console.log(this.$store.state.userName)
      return this.$store.state.userName
    }
  }
}
</script>

<style>
.bar {
  color: green;
}
</style>

