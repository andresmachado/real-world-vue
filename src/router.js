import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('./views/EventList'),
      props: true
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
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('events/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: 'event' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/NotFound'),
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: () => import('./views/NetworkIssue'),
      props: true
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
