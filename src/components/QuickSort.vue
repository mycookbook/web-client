<template>
  <div>
    <div class="ui massive search" style="margin:auto;width:83%;">
      <Explorer :filters="filters"/>
    </div>
    <Results :cookbooks="cookbooks"/>
  </div>
</template>

<script>
import AutoComplete from './AutoComplete.vue'
import Results from './Results.vue';
import Explorer from './Explorer.vue'

export default {
  data () {
    return {}
  },
  props: {
    filters: Array,
    cookbooks: Array
  },
  components: {
    AutoComplete: AutoComplete,
    Results: Results,
    Explorer: Explorer
  },
  methods: {
    getCategoryName: function(category) {
      alert(category)
    }
  }
}
</script>
<style>
.categories-quick-search-wrapper {
  width: 102%!important;
}
</style>
