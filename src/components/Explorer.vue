<template>
  <div class="categories-quick-search-wrapper">
    <p>Quick sort by categories</p>
    <div class="ui secondary menu flex-container">
      <a class="active item tbb" id="all" @click="getCategoryName('all')">All</a>
      <a class="item" id="ketogenic" @click="getCategoryName('ketogenic')">Ketogenic</a>
      <a class="item" id="fitfam" @click="getCategoryName('fitfam')">FitFam Family</a>
      <a class="item" id="vegan" @click="getCategoryName('vegan')">Vegan</a>
      <a class="item" id="health-and-wellness" @click="getCategoryName('health-and-wellness')">Health &amp; Wellness</a>
      <a class="item"
      id="nationality"
      @click="getCategoryName('nationality')"
      title="Recipes from other parts of the world submitted by other users">Nationaity</a>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {}
  },
  methods: {
    getCategoryName: function(category) {
      this.selectActive(category)
      let sortBy = category
      let cookbooks = store.state.cookbooks
      console.log("cookbooks", cookbooks)
    },
    selectActive: function(category) {
      $(".item").removeClass("active")
      $(".item").removeClass("tbb")
      let el = "#" + category
      $(el).addClass("active")
      $(el).addClass("tbb")
    }
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
