<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*@import './assets/css/style.css"'*/

body, html {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  @import url('https://fonts.googleapis.com/css?family=Work+Sans');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: 'Open Sans', sans-serif;
  /*background-color: #f8f8f8!important;*/
}

h1, h2, h3, h4, h5, h6, a, p, div, input, span, small {
  color: #444444;
}

.ui[class*="top fixed"].menu {
  border-bottom: none!important;
}

.site-content {
  flex: 1;
}
</style>
