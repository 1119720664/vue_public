<template>
  <div>
    <panes :value="value" @change="handleChange">
      <pane :index="0">
        <span slot="label">pane1</span>
        <p>菜单1{{value1}}</p>
      </pane>
      <pane :index="1">
        <span slot="label">pane2</span>
        <p>菜单2</p>
      </pane>
      <pane :index="2">
        <span slot="label">pane3</span>
        <p>菜单3</p>
      </pane>
    </panes>
    <input v-model="value1"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value: 0,
        value1: '1123'
      }
    },
    methods: {
      handleChange(value) {
        this.value = value
      }
    }
  }
</script>

<style lang="css" rel="stylesheet/css">
</style>
