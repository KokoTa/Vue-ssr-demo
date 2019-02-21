<template>
  <div id="test">
    <Loading v-show="loading" />
    <RouterView />
    Vuex：{{ num }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from './components/loading/loading'

export default {
  components: {
    Loading
  },
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
      num: state => state.mA.num,
      loading: state => state.mA.loading
    })
  }
}
</script>

<style lang="scss" scoped>
#test {
  overflow: hidden;
  height: 100%;
  background: url("./assets/images/1.jpg") center/cover no-repeat;
}
</style>
