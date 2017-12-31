<!--
@Author: Okosun Florence <florenceokosun>
@Date:   02-12-2017
@Email:  okosunuzflorence@gmail.com
@Filename: Signout.vue
@Last modified by:   florenceokosun
@Last modified time: 01-01-2018
-->



<template></template>

<script>
import router from '@/router'
import store from '@/store'

export default {
  mounted () {
    localStorage.removeItem('token')
    localStorage.removeItem('displayName')
    store.commit('LOGOUT_USER')
    router.push('login')
  }
}
</script>
