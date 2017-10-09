<template>
<div>
  <Navigation></Navigation>
  
</div>
</template>

<script>
  import Navigation from './Navigation.vue'
  import router from '@/router'
  import store from '@/store'
  import Copyright from './Copyright.vue'
  export default {
    beforeCreate () {
      if (!store.state.isLogged) {
        router.push('/signin')
      }
    },
    methods: {
    },
    components: {
      'Navigation': Navigation,
      'Copyright': Copyright
    }
  }
</script>
<style>
.ui.segment {
  background: transparent!important;
  border: 0!important;
  box-shadow: none!important;
}
</style>
