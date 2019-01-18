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
        <input
          v-model="username"
          type="text">
        <input
          v-model="password"
          type="text">
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

export default {
  components: {
    Logo
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  // * 设置登录和登出，并同步状态树(这里不同步状态也可以正常跳转，这里同步状态树是为了让当前页面知道登录成功了)
  methods: {
    ...mapMutations(['SET_USER']),
    login() {
      const username = this.username
      const password = this.password
      this.$axios
        .$post('/api/login', {
          username,
          password
        })
        .then(res => {
          this.SET_USER(res.user)
        })
        .catch(err => {
          console.error(err)
        })
    },
    loginout() {
      this.$axios
        .$post('/api/loginout')
        .then(res => {
          this.SET_USER('')
        })
        .catch(err => {
          console.error(err)
        })
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
