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

let id = 0

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
    ...mapActions(['fetchTodos']),
    handleAddTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    handleDeleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    handleToggleFilter (state) {
      this.filter = state
    },
    handleClearCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
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
