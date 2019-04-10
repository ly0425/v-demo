import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '@/components/tabbar'
import home from '@/components/home/home'
import find from '@/components/find/find'
import mine from '@/components/mine/mine'
import goodsDetails from '@/components/home/goodsDetails'
import demo from '@/components/mine/demo'

Vue.use(Router)

const router = new Router({
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
          path: '/goodsDetails',
          name: 'goodsDetails',
          component: goodsDetails
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
        },
        {
          path: '/mine/demo',
          name: 'demo',
          component: demo
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (from.query.id !== undefined) {
    to.query.id = from.query.id
  }
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限,能检测出带参数的路由
    if (sessionStorage.getItem('sender')) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
