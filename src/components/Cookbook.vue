<template>
	<div class="ui container">
		<Navigation />
		<br /><br />
		<div v-if="isLoading">
			<CookbookPageSkeleton />
		</div>
		<div v-else>
			<!-- begin breadcrumb -->
			<Breadcrumb :active="cookbook.name" />
			<!-- end of breadcrumb -->

			<!-- start categories section -->
			<div class="ui grid">
				<div
					class="sixteen wide mobile column eight wide tablet column  eight wide computer column  eight wide large screen column">
					<div class="ui labels">
						<a class="ui tiny label" v-for="category in cookbook.categories"
							:style="{ 'background-color': getBgColor(category.color) }">
							<span>{{ category.name }}</span>
							<span v-html="category.emoji"></span>
						</a>
					</div>
				</div>
				<div
					class="sixteen wide mobile column eight wide tablet column  eight wide computer column  eight wide large screen column">
					<div class="ui fluid action input">
						<input type="text" placeholder="Search recipes in this cookbook" v-model="searchText">
						<select class="ui compact selection dropdown" style="height:auto!important;" v-model="searchBy">
							<option value="all">All</option>
							<option value="contributor" selected="">By Contributor</option>
							<option value="recipe">By Recipe Name</option>
							<option value="tagName">By Tag Name</option>
						</select>
						<div class="ui tbb button" @click="searchCookbook()">
							<i class="search icon" style="margin:auto!important;"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="ui grid">
				<div
					class="sixteen wide mobile column sixteen wide tablet column sixteen wide computer column  sixteen wide large screen column">
					<span style="float:right!important;">
						<div style="margin-top:-27px!important">
							<small>
								<a href="/search?q=Naija Canadian">Advanced search</a>
							</small>
						</div>
					</span>
				</div>
			</div>
			<!-- end categories section -->

			<!-- start hero -->
			<div class="ui grid">
				<div
					class="sixteen wide mobile column sixteen wide tablet column sixteen wide computer column  sixteen wide large screen column">
					<div style="position:relative;display:flex;">
						<div>
							<a class="ui right corner red label">
								<i :class="cookbook.is_locked ? 'lock icon' : 'unlock icon'"
									title="Earn redeemable points by adding recipes to this public cookbook."></i>
							</a>
						</div>
						<img :src="cookbook.bookCoverImg" class="ui fluid image"
							alt="mj's signature custom made salad. contains chicken shreds and tomatoe"
							style="max-height:650px;">
							<!-- link to user bio was here -->
						<div style="position:absolute;top:40%;left:40%;">
							<router-link :to="{ name: 'CreateRecipe', params: { cookbook_id: cookbook.id } }">
								<div class="ui small light tbb circular button" style="padding:25px; width: 65%;">
									<i class="idea yellow icon"></i>
									Did you know that you can earn points by adding recipes to this cookbook?  <br /><br />
									Try it now, start adding recipes
								</div>
							</router-link>
						</div>
						<div
							style="position:absolute;bottom: 20;color: #ffffff; top:80%; max-width: 100%; padding: 25px 50px 0px 30px; background-color: rgba(0, 0, 0, 0.5);opacity: 0.9;">
							<div :class="{ 'cookbook-info': seeMore }">
								{{ cookbook.description }}
								{{ disclaimerText(cookbook.is_locked) }}
							</div>
							<div @click="seeMoreOrLess()">
								<span class="click" v-if="seeMore">
									<i class="ui chevron circle down icon"></i>see more
								</span>

								<span class="click" v-else>
									<i class="ui chevron circle up icon"></i>see less
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end hero -->

			<!-- recipes -->
			<div class="ui grid center">
				<div class="sixteen wide computer column sixteen wide mobile column" id="scrollIntoView">
					<RecipesList :recipes="_recipes" :cookbookId="cookbook.id" :cookbookName="cookbook.name" />
				</div>
			</div>
		</div>
		<!-- end! -->

		<div class="ui grid">
			<Contact />
			<Bottom />
		</div>
	</div>
</template>

<script>
import CookbookContributors from './CookbookContributors';
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import CookbookPageSkeleton from './Skeletons/CookbookPageSkeleton.vue';
import RecipesList from './RecipesList.vue'
import SearchCookbook from './SearchCookbook.vue'
import Breadcrumb from './Breadcrumb.vue';

export default {
	mounted() {
		window.scrollTo(0,0);
		let id = (!this.$route.params.id) ? this.$route.params.slug : this.$route.params.id
		this.$store.dispatch('fetch_cookbook', id)
	},
	props: [
		'slug',
		'id'
	],
	computed: {
		cookbook() {
			return this.$store.state.cookbook.data
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		},
		seeMore() {
			return this.$store.state.cookbookStore.seeMore
		},
		_recipes: {
			get() {
				if (this.recipes.length === 0) {
					return this.$store.state.cookbook.data.recipes
				}

				return this.recipes

			},
			set(values) {
				this.recipes = values
			}
		}
	},
	data() {
		return {
			subscribed: false,
			incrementBy: 5,
			searchText: "",
			searchBy: "recipe",
			recipes: []
		}
	},
	filters: {
		truncate(text, length, suffix) {
			if (text.length > length) {
				return text.substring(0, length) + suffix;
			} else {
				return text;
			}
		},
	},
	methods: {
		seeMoreOrLess() {
			this.$store.dispatch('see_more_or_less')
		},
		getBgColor(code) {
			return `#${code}`;
		},
		showSubscriptionForm() {
			this.subscribed = !this.subscribed
		},
		searchCookbook() {
			let by = this.searchBy.toLowerCase()
			let q = this.searchText.toLowerCase()
			let loadedRecipes = this.$store.state.cookbook.data.recipes
			let filtered = []

			if (by === 'tagname') {
				filtered = loadedRecipes.filter(function (r) {
					return r.tags.toLowerCase().includes(q.toLowerCase())
				})
			}

			if ((by === 'recipe' && !q) || (by === 'contributor' && !q) || (by === 'tagname' && !q)) {
				return this.loadedRecipes
			}

			if (by === 'recipe') {
				filtered = loadedRecipes.filter(function (r) {
					return r.name.toLowerCase().includes(q.toLowerCase())
				})
			}

			if (by === 'contributor') {
				filtered = loadedRecipes.filter(function (r) {
					let author = r.author.name.toLowerCase()
					// alert(author)
					return author.includes(q.toLowerCase())
				})
			}

			this._recipes = filtered

			this.scrollToElement()
		},
		scrollToElement() {
			const el = document.getElementById("scrollIntoView");

			el.scrollIntoView();
		},
		disclaimerText(visibility) {
			if (!visibility) {
				return "DISCLAIMER NOTICE:This is a public repository. The contributions made herein are from different contributors across the globe, therefore, contents are opinionated. Cookbookshq shall not be held liable for any misunderstanding of the descriptions therein, or any inaccuracies encountered. "
			}

			return "DISCLAIMER NOTICE: This is a private cookbook. This means that the owner has exclusive control over the contributions made in this cookbook and where possible, contributions are INVITE ONLY!!!";
		}
	},
	components: {
		CookbookContributors,
		CookbookPageSkeleton,
		SearchCookbook,
		RecipesList,
		Navigation,
		Contact,
		Bottom,
		Breadcrumb
	}
}
</script>

<style scoped>
.container {
	margin-top: 23vh;
}

p {
	color: rgba(0, 0, 0, .5);
}

.click {
	cursor: pointer !important;
}

.cookbook-info {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
