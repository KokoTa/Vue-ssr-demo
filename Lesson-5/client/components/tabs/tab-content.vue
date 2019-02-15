<script>
export default {
  props: {
    panels: {
      type: Array,
      required: true
    }
  },
  render () {
    const panel = this.panels.map((panel) => panel.active ? panel.$slots.default : null)

    return (
      <div class="tab-content">
        {panel}
      </div>
    )
  }
}
</script>
