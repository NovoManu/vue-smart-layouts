<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'

export default {
  name: "AppLayoutContacts",
  components: {
    AppLayoutLinks
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  color: red;
}
</style>
