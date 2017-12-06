<template>
  <div class="ui top fixed menu grid">
    <div class="item borderless" style="margin-left: 250px; height:75px;">
      <img src="../assets/logo.png" />
    </div>
    <div class="right menu" v-if="!isLoggedIn">
      <router-link :to="{
          name: 'Discover'
        }" class="item">
          Discover
      </router-link>
      <router-link :to="{
          name: 'Help'
        }" class="item">
          Help
      </router-link>
      <router-link :to="{
          name: 'SignUp'
        }" class="item">
          Sign Up
      </router-link>
      <router-link :to="{
          name: 'LogIn'
        }" class="item">
          Log In
      </router-link>
    </div>
    <div class="right menu" v-else>
      <router-link :to="{
          name: 'Discover'
        }" class="item">
          Discover
      </router-link>
      <router-link :to="{
          name: 'Help'
        }" class="item">
          Help
      </router-link>
      <router-link :to="{
          name: 'SignUp'
        }" class="item">
          Dashboard
      </router-link>
      <router-link to="/signout" @click="updateStatus" class="item">
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import Menui from './NavLinks.vue'
import Logo from './logos/main/Default.vue'

export default {
  created () {
    if (store.state.isLogged) {
      this.isLoggedIn = true
    }
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    updateStatus: function () {
      this.isLoggedIn = true
    }
  },
  components: {
    Logo: Logo,
    Menui: Menui
  }
}
</script>

<style>
.nav-banner {
  background-color: #4484C2;
}
</style>
