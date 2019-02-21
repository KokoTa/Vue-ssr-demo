import model from '../../model/client-model'
import notify from '../../components/notification/extend'
import bus from '../../util/bus'

const handleError = (err) => {
  if (err.code === 401) {
    // 由于并不是 vue 实例，无法调用 this.$notify
    notify({
      content: '请先登录'
    })
    // 发送事件，在 client-entry.js 处理，跳转到登录页
    bus.$emit('auth')

    // PS：按纯服务端的情况来看，发送事件跳转后，notify 应该是不会显示的，因为页面之间数据、状态互相独立
    // 但 SSR 则不然，原因是我们这里是 前端路由的跳转，后台并不会收到目标路由的请求，可以说和单页应用很像了
  } else {
    notify({
      content: '错误'
    })
  }
}

export default {
  // 获取所有 todos
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then((data) => {
        commit('fillTodo', data)
      })
      .catch((err) => {
        handleError(err)
      })
  },
  // 登录
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => { // 这里加 Promise 是为了后续的跳转
      model.login(username, password)
        .then((data) => {
          notify({
            content: '登陆成功'
          })
          resolve()
        })
        .catch((err) => { // 这里捕获错误后，后面调用就不用捕获了
          handleError(err)
          reject(err)
        })
    })
  }
}
