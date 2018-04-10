<script type="text/jsx">
  export default{
    name: 'Pane',
    props: {
      index: {
        required: true,
        type: [Number, String]
      },
      label: {
        type: String,
        default: 'tab'
      }
    },
    computed: {
      active() {
        return this.$parent.value === this.index
      }
    },
    render() {
      const tab = this.$slots.label || <span>{this.label}</span>
      const classNames = {
        'tabs-tab': true,
        'tabs-tab-active': this.active
      }
      return (
        <div class={classNames} on-click={this.handleClick}>{tab}</div>
      )
    },
    methods: {
      handleClick() {
        this.$parent.onChange(this.index)
      }
    },
    mounted() {
        this.$parent.panes.push(this)
    }
  }
</script>

<style lang="css" rel="stylesheet/css">
  .tabs {
    font-size: 14px;
    color: #657180;
  }

  .tabs-bar:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #d7dde4;
    margin-top: -1px;
  }

  .tabs-tab {
    display: inline-block;
    padding: 4px 16px;
    margin-right: 6px;
    background: #fff;
    border: 1px solid #d7dde4;
    cursor: pointer;
    position: relative;
  }

  .tabs-tab-active {
    color: #3399ff;
    border-top: 1px solid #3399ff;
    border-bottom: 1px solid #fff;
  }

  .tabs-tab-active:before {
    content: "";
    display: block;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0
  }

  .tabs-content {
    padding: 8px 0
  }

</style>
