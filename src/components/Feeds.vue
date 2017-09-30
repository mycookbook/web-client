<template>
    <div class="ui grid" style="margin:auto">
      <Navigation></Navigation>
      I am feeds
    </div>
  </template>

  <script>
    import Navigation from './Navigation.vue'
    import router from '@/router'
    import store from '@/store'
    export default {
      beforeCreate () {
        if (!store.state.isLogged) {
          router.push('/signin')
        }
      },
      methods: {
      },
      components: {
        'Navigation': Navigation
      }
    }
    </script>
