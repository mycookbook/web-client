<template>
	<div class="ui tbb button" title="clap for this recipe" @click="addClap()" :class="{ 'disabled': hasReachedMaximumAllowedThreshold }">
		<i class="ui heart icon"></i>
		{{ totalCount | numberFormatter }} Claps
	</div>
</template>

<script>
import store from '@/store';

export default {
	name: "Claps",
	mounted() {
		this.$store.dispatch('reset_hasClapped')
	},
	computed: {
		totalCount() {
			return (this.$store.state.recipe.claps) || 0
		},
		hasReachedMaximumAllowedThreshold() {
			return (this.$store.state.recipeStore.hasClapped >= this.$store.state.recipeStore.maxAllowedClaps)
		}
	},
	props: {
		numbers: Array
	},
	data() {
		return {}
	},
	methods: {
		addClap() {
			let id = this.$store.state.recipe.id

			const payload = { recipeId: id };

			store.dispatch('addClap', payload);
		}
	},
	filters: {
		numberFormatter(value) {
			//Logic goes here:

			//value greater than 1,000 && less than 9,001 => 1K+
			//value greater than 9,001 && less than 10,001 => 9K+
			//value greater than 10,001 but less than 90,001 => 10K+
			//value greater than 90,001 but less than or equal 1,000,000 => 100K+
			//value greater than 1,000,000 => 1M+

			return value
		}
	}
};
</script>
