<template>
  <div class="categories-quick-search-wrapper">
    <p>Quick sort by categories</p>
    <div class="ui secondary menu flex-container">
      <a class="active item tbb" id="all" @click="getCategoryName('all')">All</a>
      <a class="item" :id="filter.slug" @click="getCategoryName(filter.slug)" v-for="filter in filters" :title="filter.name">
        {{ filter.name }}
      </a>
      <a class="item" id="location" @click="getCategoryName('location')">Current Location</a>
      <a class="item" title="view all">
        <i class="ellipsis horizontal icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  mounted () {
    let sortKey = localStorage.getItem('sortBy')
    //todo: simulate a click event on that element
  },
  data () {
    return {}
  },
  props: {
    filters: Array
  },
  methods: {
    getCategoryName: function(category) {
      this.selectActive(category)
      this.$store.dispatch('sort', category)
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

<style scoped>
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
