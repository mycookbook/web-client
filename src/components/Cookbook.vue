<template>
<div class="ui container">
	<Navigation />
	<!-- TODO: Implement lazy loading for cookbooks recipes on this page: load only 20 at one time -->
	<div>
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<h2 class="cookbook-title">
				{{ cookbook.name }}
			</h2>
		</div>
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<div class="ui message">
				{{ cookbook.description }} 
			</div>
			<br />
		</div>
	</div>
	<div class="ui grid">
		<div class="fourteen wide column">
			<div v-if="hasRecipes(cookbook)">
				<div v-for="recipe in cookbook.recipes" :id="recipe.id">
					<div class="ui grid">
						<div class="four wide computer column sixteen wide mobile column">
							<div class="ui header">
								<h3>{{ transformRecipeName(recipe.name) }}</h3>
							</div>
							<div class="ui ribbon label">
								Prep &#38; cook Time: {{ recipe.cook_time }}
							</div>
							<div>
								<router-link :to="{
									name: 'Recipe',
									params: {
										cookbookId: cookbook.id,
										recipeId: recipe.id
									}}">
									<img 
										class="ui massive image" 
										:src="recipe.imgUrl" 
										:alt="recipe.name"
										>
								</router-link>	

							</div>
							<div>
								<div class="ui labels">
									<a class="ui tiny green label" :href="'/#/cookbook/' + cookbook.id + '/recipe/' + recipe.id + '/varieties'" v-if="recipe.variations.length > 0">
									varieties submitted: {{ recipe.variations.length }}
									</a>
									<span class="ui label" v-else>
										varieties submitted: {{ recipe.variations.length }}
									</span>
									<a class="ui tiny green label"  @click=addVariety() :title="addRecipeTitleText" style="position:absolute; margin-left:10%;">
										+ add
									</a>
								</div>
							</div>			
						</div>
						<div class="ten wide computer column sixteen wide mobile column">
							<div class="ui header"></div>
							<div class="ui header"></div>
							<div>
								{{ recipe.summary }}
							</div>
							<br />
							<div class="ui light blue label" v-for="ingredient in recipeIngredients(recipe.ingredients)">
								{{ ingredient }}
							</div>			
						</div>
						<div class="two wide computer column sixteen wide mobile column">
							<div class="nut_info mobile hidden">
								<em>NUTRITIONAL INFO</em>
								<i class="caret square down icon"></i>
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
							</div>
						</div>
					</div>
					<br><br>
					<div class="tvn horizontal stroke"></div>
					<br>
				</div>
			</div>
			<div v-else>
				<p>No recipes yet? Know a recipe? 
					<a href="/">Add Recipe</a>
				</p>
			</div>
		</div>
		<div class="two wide computer column sixteen wide mobile column">
			<div>
				<div class="ui blue button" @click="compareRecipes()">
					Compare
				</div>
			</div>
			<br />
			<div>
				<small>ad space</small>
				<img class="ui massive image" src="https://cookieandkate.com/images/2020/03/how-to-start-a-food-blog.jpg" />
				<small>ad space</small>
			</div>
		</div>
	</div>
	<Contact />
	<Bottom />
</div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';

export default {
	mounted() {
		this.cookbook = this.$store.getters['get_cookbook'](this.$route.params.id);
	},
	computed: {
		addRecipeTitleText() {
			return 'Know a nice little tweak to this recipe? Make it your own, add it!';
		}
	},
	data() {
		return {
			cookbook: {}
		};
	},
	components: {
		Navigation,
		Contact,
		Bottom,
	},
	methods: {
		addVariety() {
			alert('Coming soon');
		},
		computeCalories(val) {
			const calVal = this.parseJson(val).cal;
			return calVal ? (`${calVal} kCal`) : (`${0} kCal`);
		},
		computeCarbs(val) {
			const carbVal = this.parseJson(val).carbs;
			return carbVal ? (`${carbVal}g`) : (`${0}g`);
		},
		computeProtein(val) {
			const proteinVal = this.parseJson(val).protein;
			return proteinVal ? (`${proteinVal}g`) : (`${0}g`);
		},
		computeFat(val) {
			const fatVal = this.parseJson(val).fat;
			return fatVal ? (`${fatVal}g`) : (`${0}g`);
		},
		parseJson(i) {
			return JSON.parse(i);
		},
		transformRecipeName(name) {
			const t = name;
			return t.toUpperCase();
		},
		recipeIngredients(data) {
			const d = JSON.parse(data);
			return d.data;
		},
		hasRecipes(cookbook) {
			return (cookbook.recipes) ? !(cookbook.recipes.length === 0) : false;
		},
		compareRecipes() {
			alert('coming soon');
		}
	}
}
</script>

<style scoped>
.container {
	margin-top:23vh;
}
.cookbook-title {
	font-weight: 300;
	text-align: center;
	font-size: calc(30px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.nut_info {
	cursor: pointer;
}
</style>
