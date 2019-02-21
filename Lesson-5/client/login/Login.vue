<template>
  <form
    class="login-form"
    @submit.prevent="handleSubmit"
  >
    <!-- 可以使用 autocomplete 属性来防止自动填充用户名和密码 -->
    <h1>
      <span>Login</span>
      <span
        v-show="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </span>
    </h1>
    <input
      v-model="username"
      type="text"
      class="login-input"
      placeholder="User Name"
    >
    <input
      v-model="password"
      type="text"
      class="login-input"
      placeholder="Password"
    >
    <button
      class="login-button"
      type="submit"
    >
      登 录
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit () {
      if (this.validate()) {
        this.login({
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push('/Todo')
        })
      }
    },
    validate () {
      if (!this.username || !this.password) {
        this.errorMessage = '请完善登录信息'
        return false
      }
      this.errorMessage = ''
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.error-message {
  color: orangered;
}
</style>
