<template>
  <div class="search-banner">
    <div class="seven wide column mobile hidden caption-text">
      <span class="explore">Explore unlimited</span>
      <span class="food-recipes">food recipes</span>
    </div>
    <div class="action-text">
      with just one click.
    </div>
    <div>
      <AutoComplete />
    </div>
  </div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'

export default {
  data () {
    return {}
  },
  components: {
    AutoComplete: AutoComplete
  }
}
</script>

<style>
.search-banner {
  margin: 25% 0 0 0;
}
.food-recipes {
  color: #0160CC!important;
}
.caption-text {
  font-size: 60px;
  font-weight: 900;
  text-align: center;
}
/* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
.action-text {
  /* font-size: 40px; */
  font-weight: 300;
  text-align: center;
  padding: 65px;
  font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
</style>
