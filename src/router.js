import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('./views/EventList')
    },
    {
      path: '/event',
      name: 'event-show',
      component: () => import('./views/EventShow')
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: () => import('./views/EventCreate')
    }
  ]
})
