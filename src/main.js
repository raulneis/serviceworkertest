import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/app.scss'
import './assets/scripts/app.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
