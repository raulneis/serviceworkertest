import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import 'framework7/dist/css/framework7.css'



Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Framework7Vue, Framework7);

import router from './router'
import './assets/styles/app.scss'
import './assets/scripts/app.js'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
