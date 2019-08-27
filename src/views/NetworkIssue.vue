<template>
  <div>
    <h1>Uh, oh!</h1>
    <h3>It looks like you're experiencing some network issues.</h3>
    <router-link :to="{ name: 'event-list' }"
      >Go back and try again.</router-link
    >
  </div>
</template>
