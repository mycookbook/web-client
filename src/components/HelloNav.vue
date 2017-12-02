<template>
  <div class="text container">
    <div class="ui top fixed borderless menu" style="padding-top:10px;">
      <a href="#" class="item">
        <img src="../assets/logo.png" alt="logo"/>
      </a>
      <a class="right floated item">Discover recipes</a>
      <a class="item">
        <router-link to="/help">Help</router-link>
      </a>
      <a class="item">
        <router-link to="/signup">Sign Up</router-link>
      </a>
      <a class="item">
        <router-link to="/signin">Log In</router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style>

</style>
