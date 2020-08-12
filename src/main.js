import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iconfont from '../public/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  iconfont,
  render: h => h(App)
}).$mount('#app')
