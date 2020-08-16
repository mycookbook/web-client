<template>
<div>
	<Navigation />
	<div class="ui main-container container">
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<h2 class="cookbook-title">
				{{ cookbook.name }}
			</h2>
		</div>
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<div class="ui description">
				<div class="ui message">
					<p class="ui centered text">
						<small>{{ cookbook.description }}</small>
					</p>
				</div>
			</div>
			<br><br>
			<div class="ui grid">
				<div class="thirteen wide column">
					<div v-if="hasRecipes(cookbook)">
						<div v-for="recipe in cookbook.recipes" :id="recipe.id">
							<div class="two column row">
								<router-link :to="{
									name: 'Recipe',
									params: {
										cookbookId: cookbook.id,
										recipeId: recipe.id
									}}">
									<div class="ui sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column header">
										<h3>
											{{ transformRecipeName(recipe.name) }}
										</h3>
									</div>
								</router-link>
								<div>
									<label class="ui sixteen wide mobile label sixteen wide tablet label eight wide computer label eight wide large screen label light yellow ribbon label">
										Prep &#38; cook Time: {{ recipe.cook_time }}
									</label>
									<span style="float:right">
										<div class="nut_info mobile hidden">
											<em>NUTRITIONAL INFO</em>
											<i class="caret square down icon"></i>
										</div>
										<div class="ui flowing popup transition hidden">
											<div class="ui four column divided center">
												<div class="column">
													<span>
														<h3>{{ computeCalories(recipe.nutritional_detail) }}</h3>
													</span>
													<span>
														<h3 class="ui teal header">Calories</h3>
													</span> <hr />
												</div>
												<div class="column">
													<span>
														<h3>
															{{ computeCarbs(recipe.nutritional_detail) }}
														</h3>
													</span>
													<span>
														<h3 class="ui grey header">Carbs</h3>
													</span>	<hr />
												</div>
												<div class="column">
													<span>
														<h3>
															{{ computeProtein(recipe.nutritional_detail) }}
														</h3>
													</span>
													<span>
														<h3 class="ui purple header">Protein</h3>
													</span>	<hr />
												</div>
												<div class="column">
													<span>
														<h3>
															{{ computeFat(recipe.nutritional_detail) }}
														</h3>
													</span>
													<span>
														<h3 class="ui orange header">Fat</h3>
													</span>	
												</div>
											</div>
										</div>
									</span>
								</div>
								<div class="ui grid">
									<div class="four wide column">
										<router-link :to="{
											name: 'Recipe',
											params: {
												cookbookId: cookbook.id,
												recipeId: recipe.id
												}
											}">
											<img 
												class="ui large image" 
												:src="recipe.imgUrl" 
												:alt="recipe.name"
												style="margin-left: -12px!important">
										</router-link>	
									</div>
									<div class="twelve wide column">
										{{ recipe.summary }}
										<div class="twelve wide column" style="position: absolute;bottom: 0;left: 0;">
											<div class="ui light blue label" v-for="ingredient in recipeIngredients(recipe.ingredients)" style="margin-top: 1%;">
												{{ ingredient }}
											</div>
										</div>
									</div>
								</div>
								<div class="ui grid">
									<div class="ui three wide column">
										<h6 class="ui blue header" style="text-transform: uppercase; position: absolute; top: -10%">
											by {{ recipe.user.name }}
										</h6>
										<span>
											<p>
												{{ recipe.variations.length }} varieties
											</p>
										</span>
										<span>
											<a class="ui tiny default button" @click=addVariety() :title="addRecipeTitleText">
												+ Add variety
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-else>
						<p>No recipes yet? Know a recipe? 
							<a href="/">Add Recipe</a>
						</p>
						<div class="ui ignored info message">
							Go on about how this is community, how you might benefit how you might help save the world from poverty  and cancer.
							We appreciate your contribution! Like mentioned earlier,
							these requests are based on a pool system and the highest number
							of requests gets prioritized. Click <code>Submit request</code>
							button to send in your request and be notified if this request
							makes it to our priority list. Please note that if we find your request very convincing,
							we will schedule a skype meeting with you just for quality check. We like you and you know it!<br />
						</div>
					</div>
				</div>
				<div class="three wide center aligned column ad-space">
					<img class="ui massive image" src="https://cookieandkate.com/images/2020/03/how-to-start-a-food-blog.jpg" />
					<b>ad space</b>
				</div>
				<div class="tvn horizontal stroke"></div>
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
		this.cookbook = this.$store.getters['get_cookbook'](this.$route.params.id)
	},
	computed: {
		addRecipeTitleText() {
			return "Know a nice little tweak to this recipe? Make it your own, add it!"
		}
	},
	data () {
		return {
			cookbook: {}
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	},
	methods: {
		addVariety: function () {
			alert('adding variety ...')
		},
		computeCalories: function (val) {
			let calVal = this.parseJson(val).cal
			return calVal ? (calVal + ' kCal') : (0 + ' kCal')
		},
		computeCarbs: function (val) {
			let carbVal = this.parseJson(val).carbs
			return  carbVal ? (carbVal + 'g') : (0 + 'g')
		},
		computeProtein: function (val) {
			let proteinVal = this.parseJson(val).protein
			return proteinVal ? (proteinVal + 'g') : (0 + 'g')
		},
		computeFat: function (val) {
			let fatVal = this.parseJson(val).fat
			return fatVal ? (fatVal + 'g') : (0 + 'g')
		},
		parseJson: function(i) {
			return JSON.parse(i)
		},
		transformRecipeName: function(name) {
			let t = name
			return t.toUpperCase()
		},
		recipeIngredients: function(data) {
			return JSON.parse(JSON.parse(data)).data
		},
		hasRecipes: function (cookbook) {
			if (cookbook.recipes) {
				return !(cookbook.recipes.length == 0)
			}
		}
	}
}
</script>

<style scoped="">
.main-container {
	margin-top:7%!important;
}
.cookbook-title {
	font-weight: 300;
	text-align: center;
	font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.description {
	font-weight: 400!important;
	margin-bottom: 2%!important;
	font-size: 17px;
	line-height: 1.43;
}
.description p {
	text-align: center!important;
}
.nut_info {
	cursor: pointer;
}
</style>
