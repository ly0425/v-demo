import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import video from '@/components/video/video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
