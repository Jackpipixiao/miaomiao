import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iconfont from '../public/iconfont/iconfont.css'

import Loading from '@/components/Loading'
Vue.component('Loading',Loading)
// 引入mintui全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 自己写的全局过滤器，如果后端api传的图片url，里面宽高是根据自己需求设定的，可以用过滤器定义
// Vue.filter('setWH',(url,wh)=>{
//   return url.replace(/w\.h/,wh);
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  iconfont,
  render: h => h(App)
}).$mount('#app')
