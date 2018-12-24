<template>
  <div id="test">
    <Todo />
  </div>
</template>

<script>
import Todo from './todo/Todo'

export default {
  components: {
    Todo
  },
  data () {
    return {
      text: 'Hello World'
    }
  }
}
</script>

<style lang="scss" scoped>
#test {
  height: 100%;
  background: url("./assets/images/1.jpg") center/cover no-repeat;
}
</style>
