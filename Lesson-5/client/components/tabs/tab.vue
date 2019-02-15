<script>
/**
 * Tab 组件，放置于 Tabs 组件中
 */
export default {
  name: 'Tab',
  props: {
    index: { // 当前 tab 编号
      type: [String, Number],
      required: true
    },
    label: { // Tab 标签名
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () { // 该 tab 是否被选中
      // 除了这种方法获取父值，还可以使用 provider/inject 方法获取，这个方法的好处是，子孙也能获取到值，坏处是他不是响应式的
      return this.$parent.value === this.index
    }
  },
  mounted () {
    // 将 tab 实例填充到父组件，用于 tab content 显示
    this.$parent.panels.push(this)
  },
  methods: {
    handleClick () {
      this.$parent.handleChange(this.index) // 调用父组件的方法
    }
  },
  render () {
    // tab 标签名可能从插槽或者 props 中传进来
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }

    return (
      <li class={classNames} onClick={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="scss" scoped>
.tab {
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  bottom: -2px;
  cursor: pointer;
  float: left;
  background: #fff;
  padding: 5px 20px;

  &.active {
    border-bottom: 5px solid blue;
  }
  &.last-child {
    margin-right: 0;
  }
}
</style>
