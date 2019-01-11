<template>
  <div id="test">
    <RouterLink to="/Todo">
      TODO
    </RouterLink>
    <RouterView />
  </div>
</template>

<script>

export default {
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
