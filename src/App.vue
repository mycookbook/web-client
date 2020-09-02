<template>
  <div id="home page" class="tvn page">
    <router-view></router-view>
  </div>
</template>

<script>
require('../static/js/jquery.min.js');
require('../static/js/semantic-ui.js');
require('../static/js/script.js');

export default {
	name: 'app',
};
</script>

<style>
@import '/static/css/style.css'
</style>
