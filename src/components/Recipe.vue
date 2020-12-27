<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div v-if="isLoading">
			<RecipeCardSkeleton />
		</div>
		<div v-else>
			<div class="ui grid">
				<div class="ui two wide computer column sixteen wide mobile column">
					<div>
						<div class="ui tiny button tbb" @click="addClap()" :class="{ 'disabled':hasReachedMaximumAllowedThreshold }">
							<div>
								Likes <i class="ui thumbs up outline icon"></i>{{ totalCount }}
							</div>
						</div>
					</div>
					<hr />
					<div>
						<div>
							<b>Nutritional details</b>
						</div>
						
						<hr />
						<small>
							<h5 class="ui teal header">
								Calories:  {{ recipe.nutritional_detail.cal }}k
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
					<hr />
					<div>
						<b>No. Servings: </b>
						{{ recipe.servings }}<br />
					</div>
					<hr />
					<div>
						<span>
							<b>No. Submitted varieties:</b>
						</span>
						<span  v-if="recipe.varieties_count > 0">
							<a :href="links.varietiesPageLink">
								<span class="right foated" title="Follow link to view all varieties for this recipe">
									{{ recipe.varieties_count }}
								</span>
							</a>
						</span>
						<span v-else>0</span>
					</div>
					<hr />
					<div>
						<b>Cuisine:</b> {{ recipe.cuisine }}
					</div>
					<hr />
					<div>
						<b>Course:</b>
						<span class="transformToCapitalize">{{ recipe.course }}</span>
					</div>
					<hr />
					<div class="ui disabled red button">
						Report it!
					</div>
					<div>
						<small>
							Use this tool if you think this recipe is any of the following; inappropriate,
							unauthentic, not original, stolen or a duplicate. If you think this content was stolen
							and you can prove it, kindly provide as much detail as possible to enable us investigate
							and delete the content from our servers. Alternatively, you can
							<a href="/#/register">register</a> to become a cookbook contributor and then
							ownership will be transffered to you upon request.
						</small>
					</div>
				</div>
				<div class="ui eleven wide computer column sixteen wide mobile column">
				<div class="sixteen wide column">
					<div class="ui breadcrumb">
						<a class="section" :href="links.breadcrumbs.cookbookLink + recipe.cookbook.id">
							{{ recipe.cookbook.name }}
						</a>
						<i class="right angle icon divider"></i>
						<div class="active section">
							{{ recipe.name }}
						</div>
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui horizontal list">
						<div class="item">
							<img class="ui mini circular image" :src="recipe.author.avatar" :title="recipe.author.name">
							<div class="content">
								<div class="ui sub header">
									submitted by:
									<router-link :to="{
										name: 'ContributorProfile',
										params: {
											recipeId: recipe.id,
											username: recipe.author.name_slug
										}}">
										{{ recipe.author.name }}
									</router-link>
									{{ recipe.author.pronouns }}
								</div>
								<div class="transformToCapitalize">
									{{ recipe.author.expertise_level }}
								</div>
								<div class="ui tiny label">
									<b>Member since</b> {{ recipe.author.created_at }} | {{ recipe.author.contributions.total }} contribution(s)
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div class="sixteen wide column">
					<div class="ui light blue label twopxmargin" v-for="ingredient in recipe.ingredients">
						{{ ingredient }}
					</div>
				</div>
				<div class="sixteen wide column img-container">
					<img class="ui massive image" :src="recipe.imgUrl">
					<button class="ui inverted white button" @click="comingSoonMsg()" v-if="recipe.author.can_take_orders">
						Place Order
					</button>
				</div>
				<div class="ui grid">
					<div class="four wide computer column sixteen wide mobile column mobile hidden">
						<div class="ui vertical steps">
							<div class="completed step">
								<div class="content">
									<div class="title">
										Prep Time
									</div>
									<div class="description">{{ recipe.prep_time }}</div>
								</div>
							</div>
							<div class="completed step">
								<div class="content">
									<div class="title">
										Cook Time
									</div>
									<div class="description">
										{{ recipe.cook_time }}
									</div>
								</div>
							</div>
							<div class="active step">
								<div class="content">
									<div class="title">
										Total Time
									</div>
									<div class="description">
										{{ recipe.total_time }}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="twelve wide computer column sixteen wide mobile column">
						<br />
						<h3 class="ui header">
							HOW TO PREPARE
						</h3>
						<br />
						<div class="ui sixteen wide column container" v-html="recipe.description"></div>
					</div>
				</div>
			</div>
				<div class="ui three wide center aligned right floated column mobile hidden">
					<small>ad space</small>
					<img class="ui massive image" src="https://cookieandkate.com/images/2020/03/how-to-start-a-food-blog.jpg" />
					<small>ad space</small>
				</div>
			</div>
			<Contact />
			<Bottom />
		</div>
    </div>
</div>
</template>

<script>
import store from '@/store';
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';

export default {
	mounted() {
		this.$store.dispatch('fetch_recipe', this.$route.params.recipeId)
		this.$store.dispatch('reset_hasClapped')
	},
	computed: {
		totalCount() {
			return (this.$store.state.recipe.claps) || 0
		},
		recipe() {
			return this.$store.state.recipe
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		},
		hasReachedMaximumAllowedThreshold() {
			return (this.$store.state.recipeStore.hasClapped >= this.$store.state.recipeStore.maxAllowedClaps)
		}
	},
	data() {
		return {
			links: {
				breadcrumbs: {
					cookbookLink: '/#/cookbook/'
				},
				varietiesPageLink: '/#/recipes/'
			},
		};
	},
	methods: {
		comingSoonMsg() {
			alert('Coming soon');
    	},
		addClap() {
			const payload = {
				cookbookdId: this.$route.params.cookbookId,
				recipeId: this.$route.params.recipeId,
			};
			store.dispatch('addClap', payload);
		}
	},
	components: {
		RecipeCardSkeleton,
		Navigation,
		Contact,
		Bottom,
	},
};
</script>

<style scoped>
.breadcrumb .section {
	text-transform: uppercase;
	margin-bottom: 15px;
	font-size:smaller!important;
}
.main-content {
	margin-top: 18vh;
}
.transformToCapitalize {
	text-transform: capitalize;
}
.img-container {
	margin-top: 2%;
	position: relative;
  	width: 100%;
}
.img-container img {
	width: 100%;
	height: auto;
}
.img-container .button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
}
.twopxmargin {
	margin: 2px!important;
}
</style>
