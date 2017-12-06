// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DemoBlock from './components/demo-block'
import Ninja from '../packages/index'
import App from './App'
import router from './router'
import '../packages/theme-default/index.less'

Vue.component('demo-block', DemoBlock)
Vue.use(Ninja)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
