<template></template>

<script>
import router from '@/router'
import store from '@/store'

export default {
  mounted () {
    localStorage.removeItem('token')
    store.commit('LOGOUT_USER')
    router.push('login')
  }
}
</script>
