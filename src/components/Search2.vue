<template>
  <div class="search-banner">
    <div class="caption-text">
      <span class="explore">Explore hundreds of</span>
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
  margin: 20% 0 0 0;
}
.food-recipes {
  color: #0160CC!important;
}
.caption-text {
  font-size: 63px;
  font-weight: 900;
  text-align: center;
}
.action-text {
  font-size: 40px;
  font-weight: 300;
  text-align: center;
  padding: 65px;
}
</style>
