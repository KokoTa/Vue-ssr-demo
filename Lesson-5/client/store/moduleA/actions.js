import model from '../../model/client-model'
import notify from '../../components/notification/extend'

const handleError = (err) => {
  if (err.code === 401) {
    // 由于并不是 vue 实例，无法这样调用 notify
    // this.$notify({
    //   content: '请先登录'
    // })
    notify({
      content: '请先登录'
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
  }
}
