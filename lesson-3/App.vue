<template>
  <div>
    <h1>APP.vue</h1>
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

export default {
  components: {
    Foo,
    Bar
  },
  beforeCreate() {
      console.log('App beforeCreate');
  },
  beforeMount() {
      console.log('App beforeMount');
  },
  mounted() {
      console.log('App mounted');
  }
}
</script>

<style>
h1 {
  color: pink;
}
</style>
