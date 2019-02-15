<script>
/**
 * Tabs 组件，使用 render 方法渲染比较方便
 * 如果 Tabs 组件的 value === Tab 组件的 index，则意味着该 Tab 被选中
 */
import tabContent from './tab-content'

export default {
  name: 'Tabs',
  components: {
    tabContent
  },
  props: {
    value: { // 控制当前显示的页面
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      panels: [] // 注意！这里我们需要用一个组件来装在panel，如果直接放在同级显示，会有输入时显示慢一拍的情况，因为插槽不是响应式的！而组件的 props 是响应式的！
    }
  },
  methods: {
    // 选中 tab 后会执行此方法，把 tab 的 index 传出去
    handleChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <tab-content panels={this.panels}></tab-content>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
