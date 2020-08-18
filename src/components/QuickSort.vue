<template>
<div>
	<div class="ui massive search">
		<Explorer :filters="filters"/>
	</div>
	<div>
		<Results :cookbooks="cookbooks"/>
	</div>
	<div>
		<!-- Featured: Coming soon. -->
	</div>
</div>
</template>

<script>
import Results from './Results.vue';
import Explorer from './Explorer.vue'

export default {
	props: {
		filters: Array,
		cookbooks: Array,
		featured: Ob
	},
	components: {
		Results: Results,
		Explorer: Explorer
	}
}
</script>
