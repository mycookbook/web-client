<template>
<div>
	<div class="ui header">
		<span>Showing {{ (incrementBy > recipesSlice.length) ? recipesSlice.length : incrementBy }} of {{ recipes.length }} recipes</span>
	</div>
	
	<div class="margin-up-down"></div>
	<div class="ui fluid action input">
		<input type="text" placeholder="search recipes in this cookbook" v-model="searchText">
		<select class="ui compact selection dropdown" style="height:auto!important;" v-model="searchBy">
			<option value="contributor" selected="">By Contributor</option>
			<option value="recipe">By Recipe Name</option>
			<option value="category">By Categories</option>
		</select>
		<div class="ui tbb button" @click="searchCookbook()">
			Search
		</div>
	</div>
	<div>
		<span>
			<small><a class="link" @click="recent()">
				most recent |
			</a></small>
		</span>
		<span>
			<small>
			<a class="link" @click="oldest()">
				oldest
			</a>
			</small>
		</span>
	</div>
	<div v-if="recipesSlice.length > 0">
		<div class="margin-up-down"></div>
		<div v-for="recipe in recipesSlice" :key="recipe.id" >
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
							<div>
								<p>
									Contributed by {{ recipe.author.name }} - 2 years ago
								</p>
							</div>
							<div style="font-size: .89em!important;color: rgba(0,0,0,.5);margin-bottom: 15px;">
								<span>
									{{ recipe.claps }} Clap(s) &#38;
								</span>
								<span>
									<a href="/#/cookbook//recipe//variety/">{{ recipe.varieties_count }} Varietie(s)</a> submitted
								</span>
							</div>
						</div>
					</div>
					<div class="ui fluid image">
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
						<div class="ingredients-list"
							v-for="ingredient in recipeIngredients(recipe.ingredients)"
							v-bind:key="ingredient.id">
							<a class="ui left floated fluid image label">
								<img :src="ingredient.thumbnail" />
								{{ ingredient.name }}
							</a>
						</div>
					</div>
					<div style="padding-top:3%;color: rgba(0,0,0,.5);margin: 0 0 1em;line-height: 1.4285em;float:right!important;">
						<p>{{ recipe.summary }}</p>
					</div>
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
			htmlText: '<a href="https://contribute.cookbookshq.com/login">Login</a> to your contributor account to start adding recipes.',
			searchText: "",
            searchBy: "recipe"
		}
	},
	methods: {
		recipeIngredients(data) {
			// const d = JSON.parse(data);
			// return d.data;
			return [
					{
						name: '2 lbs red potatoes',
						thumbnail: 'https://www.irishtimes.com/polopoly_fs/1.3594671.1534163385!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
					}, {
						name: '4 tablespoons salt',
						thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61EK5fHr9gL._SL1500_.jpg'
					}, {
						name: '1 medium onion chopped',
						thumbnail: 'https://mybutcherwadingriver.com/wp-content/uploads/2020/05/red-onion.jpg'
					}, {
						name: '1/4 bag of baby carrots',
						thumbnail: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg'
					}
				]
		},
		showMore() {
			this.recipesSlice = this.recipes.slice(0, this.getBy())
		},
		getBy() {
			if (this.recipesSlice.length === this.incrementBy) {
				return this.incrementBy += 5
			}
			
			return this.incrementBy
		},
		sortRecipesList() {
			console.log('does something')
		},
		searchCookbook() {
            let by = this.searchBy.toLowerCase()
            let q = this.searchText.toLowerCase()

			this.recipesSlice = this.recipes.slice(0,5)

			if ((by === 'recipe' && !q) || (by === 'contributor' && !q) || (by === 'category' && !q)) {
				return this.recipesSlice
			}

            if (by === 'recipe') {
				this.recipesSlice = this.recipesSlice.filter(function(r) {
					return r.name.includes(q)
				})
			}

			if (by === 'contributor') {
				this.recipesSlice = this.recipesSlice.filter(function(r) {
					let author = r.author.name.toLowerCase()
					return author.includes(q)
				})
			}

			if (by === 'category') {
				this.recipesSlice = this.recipesSlice.filter(function(r) {
					return r.categories.contains(q)
				})
			}
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
	margin-top: 1px;
}
.ingredients-list a {
	margin-top: 15px!important;
}
.margin-up-down {
	margin: 45px 0 45px 0;
}
.link {
	cursor: pointer!important;
}
</style>
