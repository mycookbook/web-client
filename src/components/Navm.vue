<template>
  <div class="ui top fixed menu grid">
    <div class="item borderless" style="margin-left: 250px; height:75px;">
      <img src="../assets/logo.png" />
    </div>
    <div class="right menu">
      <a class="active item">
        Discover more
      </a>
      <a class="item">
        Help
      </a>
      <a class="item">
        Sign Up
      </a>
      <a class="item">
        Log In
      </a>
    </div>
  </div>
</template>

<script>
import Menui from './NavLinks.vue'
import Logo from './logos/main/Default.vue'

export default {
  data () {
    return {}
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
