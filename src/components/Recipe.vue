<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div class="ui grid">
			<div class="ui two wide computer column sixteen wide mobile column">
				<div>
					<div class="add-clap" @click="addClap()">
						<div class="ui tiny button tbb">
							Add Clap {{ recipe.claps }}
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
							Calories: {{ recipe.nutritional_detail.cal }} kCal
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
				<div class="ui red button" @click="reportIt()">
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
						<a class="section" :href="links.breadcrumbs.cookbookLink + cookbook.id">
							{{ cookbook.name }}
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
							<img class="ui mini circular image" :src="user.avatar">
							<div class="content">
								<div class="ui sub header">
									submitted by:
									<router-link :to="{
										name: 'ContributorProfile',
										params: {
											recipeId: recipe.id,
											username: user.name_slug
										}}">
										{{ user.name }}
									</router-link>	
									{{ user.pronouns }}
								</div>
								<div class="transformToCapitalize">
									{{ user.expertise_level }}
								</div>
								<div class="ui tiny label">
									<b>Member since</b> {{ user.created_at }} | {{ user.contributions }} contribution(s)
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div class="sixteen wide column">
					<div class="ui light blue label" v-for="ingredient in recipe.ingredients" style="margin:2px;">
						{{ ingredient }}
					</div>
				</div>
				<div class="sixteen wide column" style="margin-top:2%;">
					<img class="ui massive image" :src="recipe.imgUrl">
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
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';

export default {
	mounted() {
		this.recipe = this.$store.getters['get_recipe'](
			this.$route.params.cookbookId,
			this.$route.params.recipeId,
		);
		this.recipe.ingredients = JSON.parse(this.recipe.ingredients).data
		this.recipe.nutritional_detail = this.parseNutritionalDetails(this.recipe.nutritional_detail)
		this.recipe.claps = this.formatCount(this.recipe.claps)

		this.getLinkToRecipeVarietiesPage(this.recipe.id);

		this.cookbook = this.$store.getters['get_cookbook'](this.$route.params.cookbookId);
		this.user.contributions = this.formatCount(this.recipe.user.contributions)
		this.user.name = this.recipe.user.name
		this.user.avatar = this.recipe.user.avatar
		this.user.name_slug = this.recipe.user.name_slug
		this.user.pronouns = this.recipe.user.pronouns
		this.user.expertise_level = this.recipe.user.expertise_level
		this.user.created_at = this.recipe.user.created_at
	},
	data() {
		return {
			cookbook: {},
			recipe: {
				ingredients: [],
				nutritional_detail: {
					cal: 0,
					fat: 0,
					protein: 0,
					carbs: 0,
				},
				claps: 0
			},
			user: {
				name: '',
				pronouns: '',
				expertise_level: '',
				avatar: '',
				contributions: 0,
				name_slug: '',
				created_at: ''
			},
			links: {
				breadcrumbs: {
					cookbookLink: '/#/cookbook/'
				},
				varietiesPageLink: '/#/recipes/'
			},
		};
	},
	methods: {
		addClap() {
			alert('Coming soon');
		},
		reportIt() {
			alert('Coming soon')
		},
		formatCount(number) {
			switch (number.toString().length) {
			case 1:
			case 2:
			case 3:
				return `${number}`;
			default:
				return this.numberFormatter(number);
			}
		},
		numberFormatter(number) {
			let strVal = number.toString();
			strVal = strVal.slice(0, -3);
			const numVal = parseInt(strVal);
			return `${numVal}K+`;
		},
		parseNutritionalDetails(details) {
			const parsedData = JSON.parse(details);

			return {
				cal: parsedData.cal,
				carbs: parsedData.carbs,
				fat: parsedData.fat,
				protein: parsedData.protein
			}
		},
		getLinkToRecipeVarietiesPage(id) {
			this.links.varietiesPageLink = `${this.links.varietiesPageLink + id}/varieties`;
		},
	},
	components: {
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
</style>
