import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bug',
      name: 'bug',
      component: () => import('./views/Bug'),
      beforeEnter(_, __, next) {
        import('./store/dynamicModule').then(module => {
          store.registerModule('dynamicModule', module.default)
          next()
        })
      }
    },
    {
      path: '/no-bug',
      name: 'no-bug',
      component: () => import('./views/Nobug'),
    }
  ]
})
