<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'

export default {
  name: 'App',
  components: { AppLayout }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
