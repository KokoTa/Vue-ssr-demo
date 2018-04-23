/**
 * 生成状态实例
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 模仿请求
function fetchBar() {
  return Promise.resolve('bar bar bar')
}
function fetchFoo() {
  return Promise.resolve('foo foo foo')
}

export default function createStore() {
  return new Vuex.Store({
    state: {
      bar: '',
      foo: ''
    },
    actions: {
      fetchBar({commit}) {
        return fetchBar().then(msg => {
          commit('setBar', { msg })
        })
      },
      fetchFoo({commit}) {
        return fetchFoo().then(msg => {
          commit('setFoo', { msg })
        })
      },
    },
    mutations: {
      setBar(state, { msg }) {
        state.bar = msg
      },
      setFoo(state, { msg }) {
        state.foo = msg
      }
    }
  })
}