<template>
  <div id="test">
    <RouterView />
    {{ num }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: 'Meta Info'
  },
  data () {
    return {
      text: 'Hello World'
    }
  },
  computed: {
    ...mapState({
      num: state => state.mA.num
    })
  }
}
</script>

<style lang="scss" scoped>
#test {
  height: 100%;
  background: url("./assets/images/1.jpg") center/cover no-repeat;
}
</style>
