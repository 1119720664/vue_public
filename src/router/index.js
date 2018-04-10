import Vue from 'vue'
import Router from 'vue-router'
import PaneComponent from '@/components/pane/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pane',
      component: PaneComponent
    }
  ]
})
