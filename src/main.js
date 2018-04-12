import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import './assets/styles/app.scss'
import './assets/scripts/app.js'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
