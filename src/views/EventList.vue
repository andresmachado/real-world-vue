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

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('events/fetchEvents', { perPage: 3, page: this.page })
  },
  computed: {
    shouldShowNextPage() {
      return this.events.eventsTotal > this.page * 3
    },
    page() {
      return parseInt(this.$route.query.page || 1)
    },
    ...mapState(['events', 'users'])
  }
}
</script>

<style></style>
