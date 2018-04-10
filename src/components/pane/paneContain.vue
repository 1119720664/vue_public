<script type="text/jsx">
  export default {
    name: 'paneContain',
    props: {
      panes: {
        type: Array,
        required: true
      }
    },
    render() {
      const contents = this.panes.map(item => {
          console.log(item.$slots.default)
        return item.active ? item.$slots.default : null
      })
      return (
        <div class='tabs-content'>
          {contents}
        </div>
      )
    }
  }
</script>

<style lang="css" rel="stylesheet/css">
</style>
