export default {
  fillTodo (state, todos) {
    state.todos = todos
  },
  login (state, todo) {
    state.user = todo
  },
  addTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, { id, todo }) {
    const index = state.todos.findIndex(t => t.id === id)
    state.todos.splice(index, 1, todo)
  },
  deleteTodo (state, id) {
    const index = state.todos.findIndex(t => t.id === id)
    state.todos.splice(index, 1)
  },
  deleteAllCompleted (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },

  showLoading (state) {
    state.loading = true
  },
  hideLoading (state) {
    state.loading = false
  }
}
