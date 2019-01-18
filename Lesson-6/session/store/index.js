export const state = () => ({
  user: ''
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  // * 首先走后端逻辑，然后进入 Nuxt 逻辑，在 Nuxt 实例创建前会触发 nuxtServerInit
  // * 该方法是其他页面渲染前最先触发的钩子，执行完毕后开始执行中间件
  // * nuxtServerInit 检查请求是否有 session 信息，有就允许访问并同步状态到其他页
  // * 中间件用来确定是否有权访问页面，没有权限就会进行重定向
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.user) {
      const user = req.session.user
      commit('SET_USER', user)
    }
  }
}
