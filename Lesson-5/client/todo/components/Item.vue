<template>
  <div :class="['item', todo.completed ? 'completed' : '']">
    <input
      :id="todo.id"
      v-model="todo.completed"
      class="toggle"
      type="checkbox"
    >
    <label
      :for="todo.id"
      class="toggle-label"
    />
    <span class="content">
      {{ todo.content }}
    </span>
    <button
      class="delete"
      @click="handleDelete(todo)"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    handleDelete (todo) {
      this.$emit('delete', todo.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  font-size: 30px;
  background: white;
  padding: 15px 10px;
  transition: all 0.25s;
  overflow: hidden;
  border-bottom: 1px solid #eee;

  .toggle {
    display: none;
  }
  .toggle-label {
    width: 40px;
    height: 40px;
    display: block;
    float: left;
    border: 1px solid #d3d3d3;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    margin-right: 10px;
  }
  .content {
    float: left;
    display: block;
    line-height: 40px;
    user-select: none;
    transition: all 0.25s;
  }
  .delete {
    float: right;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    user-select: none;
    background: transparent;
    font-size: 30px;
    color: #d3d3d3;
    cursor: pointer;
    transition: all 0.25s;
  }

  &:hover {
    background: black;
    .content,
    .delete {
      color: white;
    }
  }
}

.completed {
  .toggle-label:after {
    content: "😝";
    display: block;
    line-height: 38px;
    width: 100%;
    height: 100%;
    text-align: center;
    color: green;
  }
  .content {
    font-style: italic;
    text-decoration: line-through;
  }
}
</style>
