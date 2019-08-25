import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('./views/EventList')
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: () => import('./views/EventCreate')
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: () => import('./views/EventShow'),
      props: true
    }
  ]
})
