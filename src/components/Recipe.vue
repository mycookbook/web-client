<template>
<div>
	<Navigation />
	<div class="ui container main-content">
		<div class="ui grid">
			<div class="ui two wide computer column sixteen wide mobile column">
				<div>
					<div class="add-clap" @click="addClap()">
						<b>Add Clap 2.8K</b>
					</div>
				</div>
				<hr />
				<div>
					Prep &#38; Cook time: 
				</div>
				<hr />
				<div>
					<b> {{ recipe.cook_time }} </b>
				</div>
				<hr />
				<div>
					<div>Nutritional details</div> 
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
					<b>Servings: </b> 
					{{ recipe.servings }}
					<br>
				</div>
				<hr />
				<div>
					<span>
						<b>Submitted Varieties:</b>
					</span>
					<a :href="varietiesLink">
						<span class="right foated" title="Follow link to view all varieties for this recipe">
							{{ getRecipeVaritiesCount(recipe.variations) }} 
						</span>
					</a>
				</div>
				<hr />
				<div class="ui red button" @click="reportIt()">
					Report it!
				</div>
				<div>
					<small>
						Use this tool if you think this recipe is any of the following; inappropriate, unauthentic, not original, stolen or a duplicate. 
						If you think this content was stolen and you can prove it, kindly provide as much detail as possible to enable us 
						investigate and delete the content from our servers. Alternatively, you can <a href="/#/register">register</a> to become a cookbook 
						contributor and then ownership will be transffered to you upon request.
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
									<router-link :to="{
										name: 'UserProfile',
										params: {
											username: recipe.user.name_slug
										}}">
										{{ recipe.user.name }}
									</router-link>	
									{{ recipe.user.pronouns }}
								</div>
								<div class="capitalize">
									{{ recipe.user.expertise_level }}
								</div>
								<div class="ui tiny label"> 
									<b>Member since</b> {{ getMembershipYear(recipe.user.created_at) }} | {{ userContributionsCount }} 
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui light blue label" v-for="ingredient in recipeIngredients(recipe.ingredients)" style="margin-top: 1%;">
						{{ ingredient }}
					</div>
				</div>
				<div class="sixteen wide column" style="margin-top:2%;">
					<img class="ui large image" :src="recipe.imgUrl" style="width:766px;!important">
				</div>
				<div class="sixteen wide column">
					<h3 class="ui header" style="padding:8px;">
						HOW TO PREPARE
					</h3>
				</div>
				<div class="ui sixteen wide column container" v-html="recipe.description"></div>
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
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
	mounted() {
		this.cookbook = this.$store.getters['get_cookbook'](
			this.$route.params.cookbookId,
		);

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
			let count = 1250;
			count = this.formatCount(count)
			return count;
		}
	},
	data() {
		return {
			cookbook: {},
			recipe: {
				id: '',
				coverImg: '',
				description: '',
				recipeName: '',
			},
			nutritional_detail: {
				cal: 0,
				fat: 0,
				protein: 0,
				carbs: 0
			},
			varietiesLink: '/#/',
		};
	},
	methods: {
		recipeIngredients(data) {
			return JSON.parse(data);
		},
		getRecipeVaritiesCount(varieties) {
			return (varieties) ? varieties.length : 0;
		},
		addClap() {
			alert('adding rating');
		},
		reportIt() {
			alert('Coming soon')
		},
		getMembershipYear(dateTimeString) {
			const dateTimeObject = new Date(dateTimeString);
			return dateTimeObject.toDateString();
		},
		formatCount(number) {
			let i = 0;
			switch (number.toString().length) {
			case 1:
				return `${number} contribution`;
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
			const parsedData = JSON.parse(details)

			this.nutritional_detail.cal = parsedData.cal;
			this.nutritional_detail.carbs = parsedData.carbs;
			this.nutritional_detail.fat = parsedData.fat;
			this.nutritional_detail.protein = parsedData.protein;
		},
		getLinkToRecipeVarietiesPage(recipeId) {
			this.varietiesLink = `${`${this.varietiesLink}cookbook/${this.cookbook.id}/recipe/${recipeId}/varieties`}`;
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom,
	}
}
</script>

<style scoped>
.title {
	font-weight: 900;
	margin-top: 0px;
	margin-left: -1px;
}
#recipe-name {
	text-transform: uppercase;
}
.main-content {
	margin-top: 18vh;
}
.capitalize {
	text-transform: capitalize;
}
</style>

