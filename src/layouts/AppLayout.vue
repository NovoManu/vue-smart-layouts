<template>
  <component :is="layout" />
</template>

<script>

const defaultLayout = 'AppLayoutDefault'

export default {
  name: "AppLayout",
  data() {
    return {
      layout: defaultLayout
    }
  },
  computed: {
    usedLayout() {
      try {
        return () => import(`@/layouts/${this.layout}.vue`)
      } catch (e) {
        throw Error('Layout is not found')
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.layout = route.meta.layout || defaultLayout
      }
    }
  }
}
</script>
