import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '@/components/tabbar'
import home from '@/components/home/home'
import find from '@/components/find/find'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: tabbar,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/find',
          name: 'find',
          component: find
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        }
      ]
    }
  ]
})
