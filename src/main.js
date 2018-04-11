import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
 
Vue.config.productionTip = false
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

import './assets/styles/app.scss'
import './assets/scripts/app.js'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
