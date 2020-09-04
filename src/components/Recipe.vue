<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div class="ui grid">
			<div class="ui two wide computer column sixteen wide mobile column">
				<div>
					<div class="add-clap" @click="addClap()">
						<div class="ui tiny button tbb">
							Add Clap 2.8K
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
							Calories: {{ nutritional_detail.cal }} kCal
						</h5>
					</small>
					<small>
						<h5 class="ui orange header">
							Fat: {{ nutritional_detail.fat }}g 
						</h5>
					</small>
					<small>
						<h5 class="ui purple header">
							Protein: {{ nutritional_detail.protein }}g
						</h5>
					</small>
					<small>
						<h5 class="ui grey header">
							Carbs: {{ nutritional_detail.carbs }}g
						</h5>
					</small>
				</div>
				<hr />
				<div>
					<b>No. Servings: </b> 
					{{ recipe.servings }}
					<br />
				</div>
				<hr />
				<div>
					<span>
						<b>No. Submitted Varieties:</b>
					</span>
					<a :href="varietiesLink">
						<span class="right foated" title="Follow link to view all varieties for this recipe">
							{{ recipe.varieties_count }} 
						</span>
					</a>
				</div>
				<hr />
				<div>
					<b>Cuisine:</b> {{ recipe.cuisine }}
				</div>
				<hr />
				<div>
					<b>Course:</b> {{ recipe.course }}
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
						<a href="/#/registration-link">register</a> to become a cookbook contributor and then
						ownership will be transffered to you upon request.
					</small>
				</div>
			</div>
			<div class="ui eleven wide computer column sixteen wide mobile column">
				<div class="sixteen wide column">
					<h3 id="recipe-name">
						{{ recipe.name }}
					</h3>
				</div>
				<div class="sixteen wide column">
					<div class="ui horizontal list">
						<div class="item">
							<img class="ui mini circular image" :src="recipe.user.avatar">
							<div class="content">
								<div class="ui sub header">
									submitted by: 
									<a href="/#/profiles/username">
										{{ recipe.user.name }}
									</a>
									{{ recipe.user.pronouns }}
								</div>
								<div class="expertise_title">
									{{ recipe.user.expertise_level }}
								</div>
								<div class="ui tiny label">
									<b>Member since</b> {{ recipe.user.created_at }} | {{ userContributionsCount }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div class="sixteen wide column">
					<div class="ui light blue label" v-for="ingredient in recipeIngredients(recipe.ingredients)">
						{{ ingredient }}
					</div>
				</div>
				<div class="sixteen wide column" style="margin-top:2%;">
					<img class="ui massive image" :src="recipe.imgUrl">
				</div>
				<div class="ui grid">
					<div class="four wide computer column sixteen wide mobile column">
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
		this.parseNutritionalDetails(this.recipe.nutritional_detail);
		this.getLinkToRecipeVarietiesPage(this.recipe.id);
	},
	created() {
		this.recipeName = this.recipe.name;
	},
	computed: {
		userContributionsCount() {
			return this.formatCount(this.recipe.user.contributions);
		},
	},
	data() {
		return {
			recipe: {
				id: '',
				coverImg: '',
				description: '',
				recipeName: '',
				ingredients: [],
			},
			nutritional_detail: {
				cal: 0,
				fat: 0,
				protein: 0,
				carbs: 0,
			},
			varietiesLink: '/#/recipes/',
		};
	},
	methods: {
		recipeIngredients(data) {
			const d = JSON.parse(data);
			return d.data;
		},
		addClap() {
			alert('Coming soon');
		},
		reportIt() {
			alert('Coming soon')
		},
		formatCount(number) {
			switch (number.toString().length) {
			case 1:
				return `${number} contribution(s)`;
			case 2:
			case 3:
				return `${number} contributions`;
			default:
				return this.numberFormatter(number);
			}
		},
		numberFormatter(number) {
			let strVal = number.toString();
			strVal = strVal.slice(0, -3);
			const numVal = parseInt(strVal);
			return `${numVal}K+ contributions`;
		},
		parseNutritionalDetails(details) {
			const parsedData = JSON.parse(details);

			this.nutritional_detail.cal = parsedData.cal;
			this.nutritional_detail.carbs = parsedData.carbs;
			this.nutritional_detail.fat = parsedData.fat;
			this.nutritional_detail.protein = parsedData.protein;
		},
		getLinkToRecipeVarietiesPage(id) {
			this.varietiesLink = `${this.varietiesLink + id}/varieties`;
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
#recipe-name {
	text-transform: uppercase;
}
.main-content {
	margin-top: 18vh;
}
.expertise_title {
	text-transform: capitalize;
}
</style>
