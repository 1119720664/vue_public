// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Panes from '@/components/pane/panes'
import Pane from '@/components/pane/pane'
import paneContain from '@/components/pane/paneContain'

Vue.component(Panes.name, Panes)
Vue.component(Pane.name, Pane)
Vue.component(paneContain.name, paneContain)
Vue.use(router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
