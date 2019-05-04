<template>
  <div class="categories-quick-search-wrapper">
    <p>Quick search by categories</p>
    <div class="ui secondary menu flex-container">
      <a class="active item tbb">All</a>
      <a class="item">Featured</a>
      <a class="item">Trending</a>
      <a class="item">FitFam Family</a>
      <a class="item">Vegan</a>
      <a class="item">Health &amp; Wellness</a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
.categories-quick-search-wrapper {
  margin-top: 5%!important;
  background-color: #fcfcfc!important;
  padding:4%!important;
}
.categories-quick-search-wrapper p {
  color: #999999!important;
  font-weight: 300;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
