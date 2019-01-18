<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-route
      </h1>
      <h2 class="subtitle">
        My prime Nuxt.js project
      </h2>
      <div class="links">
        <button
          href="https://nuxtjs.org/"
          class="button--green"
          @click="login">Login</button>
        <button
          href="https://nuxtjs.org/"
          class="button--green"
          @click="loginout">loginout</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapMutations } from 'vuex'
const Cookie = process.client ? require('js-cookie') : null

export default {
  components: {
    Logo
  },
  // * 设置登录和登出，并同步状态树(这里不同步状态也可以正常跳转，这里同步状态树是为了让当前页面知道登录成功了)
  methods: {
    ...mapMutations(['SET_TOKEN']),
    login() {
      const token = 'fuckingTokenIsHere' // * 这个 token 是从第三方登录获取的
      Cookie.set('token', token) // * 设置到 cookie 里
      this.SET_TOKEN(token) // * 同步状态树
      this.$router.go(0) // * 重新渲染该页面，此时会重新请求，新的 cookie 会传到后端
    },
    loginout() {
      Cookie.remove('token')
      this.SET_TOKEN('')
      // 这里看是要重定向或是做其他操作
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
