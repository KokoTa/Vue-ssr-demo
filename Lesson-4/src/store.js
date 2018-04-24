/**
 * 数据预存储容器
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function fetchItem(id) {
  return Promise.resolve(`You get Id: ${id}`)
}
function fetchItem2(name) {
  return Promise.resolve(`You get Name: ${name}`)
}

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {},
      userName: '',
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      },
      fetchItem2({ commit }, name) {
        return fetchItem2(name).then(item => {
          commit('setItem2', item)
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      },
      setItem2(state, name) {
        state.userName = name
      }
    }
  })
}