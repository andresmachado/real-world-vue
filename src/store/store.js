import Vue from 'vue'
import Vuex from 'vuex'

import * as users from '@/store/modules/users.js'
import * as events from '@/store/modules/events.js'
import * as notifications from '@/store/modules/notifications.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    events,
    notifications
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
