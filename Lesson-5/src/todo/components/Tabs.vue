<template>
  <div class="tabs">
    <span class="count">{{unFinishedTodoLength}} items left</span>
    <span class="clear" @click="handleClear">Clear completed</span>
    <div class="status">
      <span
        :class="[filter === state ? 'active' : '']"
        v-for="(state, index) in status"
        :key="index"
        @click="handleFilter(state)"
      >{{state}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      status: ["all", "active", "completed"],
      unFinishedTodoLength: this.todos.length
    };
  },
  methods: {
    handleFilter(state) {
      this.$emit("toggle", state);
    },
    handleClear() {
      this.$emit("clearCompleted");
    }
  },
  watch: {
    todos: {
      deep: true, // 不能用 computed，因为它无法监听数组内部的对象的属性值
      handler() {
        this.unFinishedTodoLength = this.todos.filter(
          todo => !todo.completed
        ).length;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  line-height: 40px;
  background: white;
  padding: 15px 10px;
  overflow: hidden;

  .count {
    float: left;
  }
  .status {
    text-align: center;
    span {
      box-sizing: border-box;
      display: inline-block;
      padding: 0 10px;
      border: 1px solid transparent;
      cursor: pointer;
    }
    span.active {
      border-color: pink;
      border-radius: 10px;
    }
  }
  .clear {
    float: right;
    cursor: pointer;
  }
}
</style>
