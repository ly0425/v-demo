// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import Vant from 'vant'
import axios from 'axios'
import Vuex from 'vuex'
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
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters: { // 添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: { // 添加mutations
    minusPrice (state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
      return newPrice
    }
  },
  actions: { // 添加actions
    minusPriceAsync (context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload) // context提交
      }, 2000)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
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
