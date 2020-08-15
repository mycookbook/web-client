<template>
<div>
	<div class="ui massive search">
		<Explorer :filters="filters"/>
	</div>
    <Results :cookbooks="cookbooks"/>
  </div>
</template>

<script>
import Results from './Results.vue';
import Explorer from './Explorer.vue'

export default {
	props: {
		filters: Array,
		cookbooks: Array
	},
	components: {
		Results: Results,
		Explorer: Explorer
	}
}
</script>

<style scoped>
.categories-quick-search-wrapper {
	width: 102%!important;
}
</style>
