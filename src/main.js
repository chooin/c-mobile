// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
// import Mobile from '../dist'
import '../packages/include-variables.scss'
import Mobile from '../packages'

Vue.config.productionTip = false
Vue.use(Mobile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
