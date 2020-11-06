<template>
  <div id="home page" class="tvn page">
    <Cookie />
    <router-view></router-view>
  </div>
</template>

<script>
require('./assets/js/jquery.min.js');
require('./assets/js/semantic.min.js');
require('./assets/js/script.js');
require('../static/js/script.js')

import Cookie from './components/Cookie.vue'

export default {
  name: 'app',
  components: {
    Cookie
  }
}
</script>

<style>
@import '/static/css/style.css'
</style>
