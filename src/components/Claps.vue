<template>
	<div>
		<Navigation />
		<div class="ui large tbb button" @click="addClap()" :class="{ 'disabled': hasReachedMaximumAllowedThreshold }" title="clap for this recipe">
			<small>
				<i class="ui hand peace icon"></i>
					{{ totalCount | numberFormatter }} Claps
			</small>
		</div>
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

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
		return {
			title: 'This is an Example component'
		}
	},
	methods: {
		addClap() {
			let id = (!this.$route.params.id) ? this.$route.params.slug : this.$route.params.id

			const payload = {
				recipeId: id,
			};
			store.dispatch('addClap', payload);
		}
	},
	filters: {
		exampleFilter() { }
	},
	components: {
		Navigation
	}
};
</script>

<style scoped>
.example-class {
	color: #000000;
}
</style>