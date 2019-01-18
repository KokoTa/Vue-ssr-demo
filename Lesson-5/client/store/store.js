import Vuex from 'vuex'
import moduleA from './moduleA'

const isDev = process.env.NODE_ENV === 'development'

// 和 vue-router 一样，服务端渲染中也需要创建新的状态实例
export default () => {
  return new Vuex.Store({
    strict: isDev, // 开发模式下启用严格模式，即不能直接赋值 state
    modules: {
      mA: moduleA
    }
  })
}
