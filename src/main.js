// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import Vant from 'vant'
import axios from 'axios'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Mint)
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    axios.get(
      'http://localhost:3000/users',
      {headers: { 'Content-Type': '' }}
    ).then(function (res) {
      console.log(res.data)
    })
  }
})
