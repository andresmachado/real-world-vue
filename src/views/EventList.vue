<template>
  <div class="event-listing">
    <h1>Event for {{ users.user.name }}</h1>
    <EventCard v-for="event in events.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Previous Page</router-link
      >
    </template>
    <template v-if="shouldShowNextPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >&nbsp;|&nbsp;Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
import store from '@/store/store'

function getPageEvents(to, next) {
  const currentPage = parseInt(to.query.page || 1)
  store.dispatch('events/fetchEvents', { page: currentPage }).then(() => {
    to.params.page = currentPage
    next()
  })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  components: {
    EventCard
  },
  computed: {
    shouldShowNextPage() {
      return this.events.eventsTotal > this.page * this.events.perPage
    },
    ...mapState(['events', 'users'])
  }
}
</script>

<style></style>
