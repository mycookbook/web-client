<template>
<div class="ui container">
	<Navigation />
	<div v-if="isLoading">
		<div class="ui active inverted dimmer">
			<div class="ui text loader">Loading ...</div>
		</div>
		<p></p>
	</div>
	<div v-else>
		<div>
			<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
				<span class="ui header cookbook-title">
					{{ cookbook.name }}
				</span>
				<span class="ui right floated mini red button" @click="comingSoonMsg()" title="Be the first to know when there is a new submission into this cookbook.">
					<i class="ui bell icon"></i>
					SUBSCRIBE
				</span>
			</div>
			<br />
			<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
				<div class="ui message">
					{{ cookbook.description }} 
				</div>
				<br />
			</div>
		</div>
		<div class="ui grid">
			<div class="fourteen wide column">
				<div v-if="hasRecipes">
					<div v-for="recipe in cookbook.recipes" :key="recipe.id">
						<div class="ui grid">
							<div class="four wide computer column sixteen wide mobile column">
								<div class="ui header">
									<h3>{{ recipe.name }} </h3>
								</div>
								<div class="ui ribbon label">
									Prep &#38; Cook Time: {{ recipe.total_time }}
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
									<div>
									<div class="ui labels">
										<a class="ui label" id="viewRecipeSubmissionsTitleText">
											Variety Submissions:
											<div class="detail" v-if="recipe.variations">
												{{ recipe.variations.length }}
											</div>
											<div class="detail" v-else>
												0
											</div>
										</a>
										<a class="ui blue button label right floated" @click=addVariety() id="addRecipeButtonTitleText">
											+ Add
										</a>
									</div>
								</div>		
								</div>	
							</div>
							<div class="ten wide computer column sixteen wide mobile column">
								<div class="ui header"></div>
								<div class="ui header"></div>
								<div>{{ recipe.summary }}</div><br />
								<div class="ui light blue label ingredients-list"
								v-for="ingredient in recipeIngredients(recipe.ingredients)"
								v-bind:key="ingredient.id">
									{{ ingredient }}
								</div>			
							</div>
							<div class="two wide computer column sixteen wide mobile column">
								<div class="ui nutr_info">
									<em>NUTR. INFO</em>
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
													<h3>{{ computeCarbs(recipe.nutritional_detail) }}</h3>
												</span>
												<span>
													<h3 class="ui teal header">Carbs</h3>
												</span> <hr />
											</div>
											<div class="column">
												<span>
													<h3>{{ computeFat(recipe.nutritional_detail) }}</h3>
												</span>
												<span>
													<h3 class="ui teal header">Fat</h3>
												</span> <hr />
											</div> -->
											<div class="column">
												<span>
													<h3>{{ computeProtein(recipe.nutritional_detail) }}</h3>
												</span>
												<span>
													<h3 class="ui teal header">Protein</h3>
												</span> <hr />
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
					<div>
						<p>No recipes yet? Know a recipe? 
							<a href="/#/register">Add Recipe</a>
						</p>
					</div>
				</div>
				<div class="two wide computer column sixteen wide mobile column">
					<div>
						<div class="ui blue button" @click="comingSoonMsg()">
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
		if (localStorage.getItem("cookbook_isReloaded") == 'true') {
			this.$store.dispatch('reload_global_resources', this.$route.params.cookbookId)
		}
	},
	computed: {
		cookbook() {
			return this.$store.getters['get_cookbook'](
				this.$route.params.id,
			);
		},
		hasRecipes() {
			return true
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		}
	},
	created () {
		window.addEventListener('beforeunload', this.reload)
  	},
	methods: {
		reload() {
			localStorage.setItem("cookbook_isReloaded", true)
		},
		comingSoonMsg() {
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
.container {
	margin-top:23vh;
}
.cookbook-title {
	text-transform: uppercase;
	font-weight: 300;
}
.nut_info {
	cursor: pointer;
}
.ingredients-list {
	margin-top: 1%;
}
</style>
