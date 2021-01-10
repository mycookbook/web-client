<template>
<div class="ui container">
	<Navigation />
	<div class="main-content">
		<div v-if="isLoading">
			<RecipeCardSkeleton />
		</div>
		<div class="ui grid" v-else>
			<div class="ui two wide computer column sixteen wide tablet column sixteen wide mobile column">
				<div>
					<div class="ui tiny button tbb" @click="addClap()" :class="{ 'disabled':hasReachedMaximumAllowedThreshold }">
						<div>
							<span style="display:inline-block;font-size:1.7em;float: left!important;margin-left: -4px;">&#x1F389;</span> 
							<span style="display:inline-block;font-size:1.2em;float: right!important;margin-right: -8px;">
								{{ totalCount | numberFormatter }} claps
							</span>
						</div>
					</div>
				</div>
				<div class="tvn horizontal stroke"></div>
				<div>
					<div>
						<b>Nutritional details</b>
					</div>
					<div class="tvn horizontal stroke"></div>
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
					<span  v-if="recipe.varieties_count > 0">
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
				<div class="tvn horizontal stroke"></div>
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
						<a class="section" :href="'/#/cookbooks/' + recipe.cookbook.slug">
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
									<a :href="'/#/contributors/@' + recipe.author.name_slug">
										{{ recipe.author.name }}
									</a>
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
					<a class="ui image label" v-for="ingredient in recipe.ingredients">
						<img :src="ingredient.thumbnail" />
						{{ ingredient.name }}
					</a>
				</div>
				<div class="sixteen wide column img-container">
					<img class="ui massive image" :src="recipe.imgUrl">
					<button class="ui inverted white button" @click="comingSoonMsg()" v-if="recipe.author.can_take_orders">
						Place Order
					</button>
				</div>
				<div class="ui grid">
					<div class="four wide computer column sixteen wide tablet column sixteen wide mobile column mobile hidden">
						<div class="ui vertical steps tablet hidden">
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
						<!-- Tablet -->
						<div class="ui horizontal steps tablet only">
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
					<div class="twelve wide computer column sixteen wide tablet column sixteen wide mobile column">
						<div class="ui header padding">
							HOW TO PREPARE
						</div>
						<div class="description-contents"v-html="recipe.description"></div>
					</div>
				</div>
			</div>
			<div class="ui three wide center aligned computer column sixteen wide tablet column mobile hidden">
				<!-- Ads space -->
			</div>
		</div>
		<Contact />
		<Bottom />
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
		let id = (!this.$route.params.id) ? this.$route.params.slug : this.$route.params.id

		this.$store.dispatch('fetch_recipe', id)
		this.$store.dispatch('reset_hasClapped')
	},
	props: [
		'slug',
		'id'
	],
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
			let id = (!this.$route.params.id) ? this.$route.params.slug : this.$route.params.id

			const payload = {
				recipeId: id,
			};
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
.description-contents {
	overflow-x: auto!important;
    overflow-y: hidden!important;
}
.padding {
	padding-top: 30px;
	padding-bottom:5px;
}
</style>
