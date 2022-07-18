<template>
	<div>
		<Navigation />
		<div>
			<div>
				<b>Nutritional details</b>
			</div>
			<div class="tvn horizontal stroke"></div>
			<small>
				<h5 class="ui teal header">
					Calories: {{ recipe.nutritional_detail.cal }}k
				</h5>
			</small>
			<small>
				<h5 class="ui orange header">
					Fat: {{ recipe.nutritional_detail.fat }}g
				</h5>
			</small>
			<small>
				<h5 class="ui purple header">
					Protein: {{ recipe.nutritional_detail.protein }}g
				</h5>
			</small>
			<small>
				<h5 class="ui grey header">
					Carbs: {{ recipe.nutritional_detail.carbs }}g
				</h5>
			</small>
		</div>
		<div class="tvn horizontal stroke"></div>
		<div>
			<b>No. Servings: </b>
			{{ recipe.servings }}<br />
		</div>
		<div class="tvn horizontal stroke"></div>
		<div>
			<span>
				<b>No. Submitted varieties:</b>
			</span>
			<span v-if="recipe.varieties_count > 0">
				<a :href="links.varietiesPageLink">
					<span class="right foated" title="Follow link to view all varieties for this recipe">
						{{ recipe.varieties_count }}
					</span>
				</a>
			</span>
			<span v-else>0</span>
		</div>
		<div class="tvn horizontal stroke"></div>
		<div>
			<b>Cuisine:</b> {{ recipe.cuisine }}
		</div>
		<div class="tvn horizontal stroke"></div>
		<div>
			<b>Course:</b>
			<span class="transformToCapitalize">{{ recipe.course }}</span>
		</div>
	</div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
	name: "NutritionalDetail",
	mounted() { },
	computed: {
		example() {
			return true
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