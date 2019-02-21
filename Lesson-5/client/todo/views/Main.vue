<template>
  <div class="main">
    <input
      type="text"
      class="main-input"
      placeholder="接下去要做什么"
      autocomplete
      @keyup.enter="handleAddTodo"
    >
    <Item
      v-for="todo in filterTodos"
      :key="todo.id"
      :todo="todo"
      @delete="handleDeleteTodo"
      @toggle="handleToggleItem"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="handleToggleFilter"
      @clearCompleted="handleClearCompleted"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Item from '../components/Item'
import Tabs from '../components/Tabs'

export default {
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      filter: 'all'
    }
  },
  computed: {
    ...mapState({
      todos: state => state.mA.todos
    }),
    filterTodos () {
      if (this.filter === 'all') return this.todos
      if (this.filter === 'active') {
        return this.todos.filter(todo => !todo.completed)
      }
      if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed)
      }
      return false
    }
  },
  created () {
    this.fetchTodos()
  },
  methods: {
    ...mapActions(['fetchTodos', 'addTodo', 'updateTodo', 'deleteTodo', 'deleteAllCompleted']),
    handleAddTodo (e) { // 新增 todo
      const content = e.target.value.trim()

      if (!content) return this.$notify({ content: '请输入内容' })
      this.addTodo({
        content,
        completed: false
      })

      e.target.value = ''
    },
    handleDeleteTodo (id) { // 删除 todo
      this.deleteTodo(id)
    },
    handleClearCompleted () { // 删除所有已完成
      this.deleteAllCompleted()
    },
    handleToggleItem (todo) { // 更新 todo
      // 由于 todo 是状态里的数据，因此不能直接更改后传递
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    handleToggleFilter (state) { // 过滤 todo
      this.filter = state
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 800px;
  margin: 0 auto;

  .main-input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 30px;
    text-indent: 50px;
    padding: 15px 10px;
  }
}
</style>
