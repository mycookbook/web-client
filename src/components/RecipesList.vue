<template>
<div>
	<div class="ui header">
		<span>Showing {{ (incrementBy > recipesSlice.length) ? recipesSlice.length : incrementBy }} of {{ recipes.length }} recipes</span>
	</div>
	<div class="margin-up-down"></div>
	<div class="ui fluid action input">
		<input type="text" placeholder="search recipes in this cookbook" v-model="searchText">
		<select class="ui compact selection dropdown" style="height:auto!important;" v-model="searchBy">
			<option value="all">All</option>
			<option value="contributor" selected="">By Contributor</option>
			<option value="recipe">By Recipe Name</option>
			<option value="tagName">By Tag Name</option>
		</select>
		<div class="ui tbb button" @click="searchCookbook()">
			Search
		</div>
	</div>
	<div>
		<span>
			<small>
				<a class="link" @click="sortBy('newest')">
					most recent |
				</a>
			</small>
		</span>
		<span>
			<small>
				<a class="link" @click="sortBy('oldest')">
					oldest
				</a>
			</small>
		</span>
		<span style="float:right!important;">
			<small>
				<a :href="advancedSearchUri()">Advanced search</a>
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
									Contributed by <a :href="contributorPage(recipe.author.name_slug)">{{ recipe.author.name }}</a> - {{ recipe.submission_date }}
								</p>
							</div>
							<div style="font-size: .89em!important;color: rgba(0,0,0,.5);margin-bottom: 15px;">
								<span>
									{{ recipe.claps }} Clap(s) <br />
								</span>
								<span>
									<a href="/recipes/1/varieties/">{{ recipe.varieties_count }} Varietie(s)</a>
								</span>
							</div>
						</div>
					</div>
					<div class="ui tiny labels">
						<div class="ui left floated white label" style="background-color: transparent!important;">
							Tags
						</div>
						<div class="ui grey label" v-for="tag in JSON.parse(recipe.tags)" style="background-color: #333d79!important;border-color: #333d79!important;">
							<span>
								{{ tag }}
							</span>
							<span>
								<i class="delete icon"></i>
							</span>
						</div>
					</div>
					<div class="ui fluid image">
						<div class="ui left ribbon label light-pink">
							Prep &#38; Cook Time: {{ recipe.total_time }}
						</div>
						<div class="ui right ribbon orange label">
							<i class="utensil spoon icon"></i>{{ recipe.cuisine }} cuisine
						</div>
						<router-link :to="{
							name: 'Recipe',
							params: {
								slug: recipe.slug,
								id: recipe.id
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
							<a class="ui left floated fluid image label light-pink">
								<img :src="ingredient.thumbnail" />
								{{ ingredient.name }}
							</a>
						</div>
					</div>
					<div style="padding-top:3%;color: rgba(0,0,0,.5);margin: 0 0 1em;line-height: 1.4285em;float:right!important;">
						<p>{{ recipe.summary | | truncate(130, '...') }}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-if="recipesSlice.length >= recipes.length">
			<span>
				<p>no more recipes.</p>
			</span>
			<span style="float:right!important;">
				<a @click="scrollToTop()" style="cursor:pointer!important;">
					<i class="ui long arrow alternate up icon"></i>Scroll To Top
				</a>
			</span>
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
		cookbookId: Number,
		cookbookName: String
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
	filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
	methods: {
		advancedSearchUri() {
			if (this.searchText === "") {
				return '/search?q=' + this.cookbookName
			}

			return '/search?q=' + this.searchText
		},
		recipeIngredients(data) {
			return JSON.parse(data)
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

			if (by === 'tagname') {
				this.recipesSlice = this.recipesSlice.filter(function(r) {
					return r.tags.includes(q)
				})
			}

			if ((by === 'recipe' && !q) || (by === 'contributor' && !q) || (by === 'tagname' && !q)) {
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

			return this.recipesSlice
        },
		sortBy(order) {
			this.recipesSlice.sort(function(a,b) {

				var dateA = Date.parse(a.created_at)
				var dateB = Date.parse(b.created_at)

				if (order === 'oldest' && (dateA < dateB)) {
					return -1;
				}

				if (order === 'oldest' && (dateA > dateB )) {
					return 1;
				}

				if (order === 'newest' && (dateA > dateB)) {
					return -1;
				}

				if (order === 'newest' && (dateA < dateB )) {
					return 1;
				}

				return 0;
			})
		},
		scrollToTop() {
			window.scrollTo(0,0);
		},
		contributorPage(username) {
			return "/contributors/@" + username
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
.light-pink {
	background-color: #faebef!important;
    border-color: #faebef!important;
    color: black!important;
}
</style>
