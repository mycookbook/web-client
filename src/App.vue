<template>
  <div id="home page" class="tvn page">
    <Cookie />
    <router-view></router-view>
  </div>
</template>

<script>
import Cookie from './components/Cookie.vue';

require('./assets/js/jquery.min.js');
require('./assets/js/semantic.min.js');
require('./assets/js/script.js');
require('../static/js/script.js')

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