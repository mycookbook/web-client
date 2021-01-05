<template>
<div>
	<div v-if="recipesSlice.length > 0">
		<SearchCookbook />
			<div class="margin-up-down"></div>
			<div v-for="recipe in recipesSlice" :key="recipe.id">
				<div class="ui grid">
					<div class="sixteen wide mobile column 
						sixteen wide tablet column 
						sixteen wide computer column 
						sixteen wide large screen column"
					>
						<div class="ui header capitalized">
							<span>
								<h3>
									{{ recipe.name }}
								</h3>
							</span>
						</div>
						<div style="margin-top:-15px!important;font-size: .89em!important;color: rgba(0,0,0,.5);">
							<div>
								<span>
									<p>
										Contributed by {{ recipe.author.name }}
									</p>
								</span>
								<small>
									{{ recipe.claps }} CLAP(S)
								</small>
							</div>
							<div>
								<small>
									<a href="/#/">{{ recipe.varieties_count }} VARIETIE(S)</a> SUBMITTED
								</small>
							</div>
						</div>
						<div class="ui medium fluid left floated image">
							<div class="ui orange left ribbon label">
								Prep &#38; Cook Time: {{ recipe.total_time }}
							</div>
							<router-link :to="{
							name: 'Recipe',
							params: {
								cookbookId: cookbookId,
								recipeId: recipe.id
							}}">
							<img 
								:src="recipe.imgUrl" 
								:alt="recipe.name"
								>
							</router-link>
						</div>
						<div>
							<div class="ui light blue label ingredients-list"
								v-for="ingredient in recipeIngredients(recipe.ingredients)"
								v-bind:key="ingredient.id">
								{{ ingredient }}
							</div>
						</div>
						<p>{{ recipe.summary }}</p>
					</div>
				</div>
			</div>
			<div v-if="recipesSlice.length >= recipes.length">
				<p>no more recipes.</p>
			</div>
			<div v-else>
				<a class="link" @click="showMore()">
					Show more
				</a>
			</div>
		</div>
		<div v-else>
			<NothingToShowYou :htmlText="htmlText" style="margin-top:50%;"/>
		</div>
	</div>
</div>
</template>

<script>
import NothingToShowYou from './NothingToShowYou.vue';
import SearchCookbook from './SearchCookbook.vue'

export default {
	name: "RecipesList",
  	props: {
    	recipes: Array,
		cookbookId: Number
  	},
	data() {
		return {
			incrementBy: 5,
			recipesSlice: this.recipes.slice(0, 5),
			htmlText: '<a href="https://contribute.cookbookshq.com/login">Login</a> to your contributor account to start adding recipes.'
		}
	},
	methods: {
		recipeIngredients(data) {
			const d = JSON.parse(data);
			return d.data;
		},
		showMore() {
			this.recipesSlice = this.recipes.slice(0, this.incrementBy)
		}
	},
	components: {
		NothingToShowYou,
		SearchCookbook
	}	  
}
</script>

<style scoped>
.capitalized {
	text-transform: capitalize!important;
}
.ingredients-list {
	margin-top: 1%;
}
.margin-up-down {
	margin: 45px 0 45px 0;
}
.link {
	cursor: pointer!important;
}
</style>
