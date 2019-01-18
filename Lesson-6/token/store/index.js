const querystring = require('querystring')

// * 注意这里 state 是函数，其他都是对象
export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const actions = {
  // * 首先走后端逻辑，然后进入 Nuxt 逻辑，在 Nuxt 实例创建前会触发 nuxtServerInit
  // * 该方法是其他页面渲染前最先触发的钩子，执行完毕后开始执行中间件
  // * nuxtServerInit 验证 token 有效性(异步请求第三方或者其他方法)，有效就同步状态，无效就不赋值
  // * 中间件用来检查状态是否有token，没有就会进行重定向
  nuxtServerInit({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const token = querystring.parse(req.headers.cookie).token
      if (token) {
        // 这里进行 token 第三方验证或其他方法
        commit('SET_TOKEN', token)
      }
    }
  }
}
