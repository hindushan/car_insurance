import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/start.vue'
import Home from './views/home.vue'


Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/start',
      name: 'Start',
      meta: {
        ishome: true
      },
      component: Start
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        ishome: true
      },
      component: Home
    },
    {
      path: '/home',
      name: 'Home2',
      meta: {
        ishome: true
      },
      component: Home
    }
  ]
})

export default router