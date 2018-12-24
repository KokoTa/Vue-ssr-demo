<template>
  <div class="main">
    <input
      type="text"
      class="main-input"
      @keyup.enter="handleAddTodo"
      placeholder="接下去要做什么"
      autocomplete
    >
    <Item v-for="todo in filterTodos" :key="todo.id" :todo="todo" @delete="handleDeleteTodo"></Item>
    <Tabs
      :filter="filter"
      :todos="filterTodos"
      @toggle="handleToggleFilter"
      @clearCompleted="handleClearCompleted"
    ></Tabs>
  </div>
</template>

<script>
import Item from "../components/Item";
import Tabs from "../components/Tabs";

let id = 0;

export default {
  components: {
    Item,
    Tabs
  },
  computed: {
    filterTodos() {
      if (this.filter === "all") return this.todos;
      if (this.filter === "active")
        return this.todos.filter(todo => !todo.completed);
      if (this.filter === "completed")
        return this.todos.filter(todo => todo.completed);
    }
  },
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  methods: {
    handleAddTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    handleDeleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    handleToggleFilter(state) {
      this.filter = state;
    },
    handleClearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
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
