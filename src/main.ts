import Vue from 'vue'
import router from './setup/router'
import './setup/registerServiceWorker'
import './setup/registerComponents'
import './setup/registerEventBus'


Vue.config.productionTip = false

new Vue({
  router,
  template: '<app />'
}).$mount('#app')


// register tailwind styles last
import "./style/tailwind.css"