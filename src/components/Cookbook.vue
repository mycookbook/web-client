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
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<div class="ui header cookbook-title">
				<div class="ui small breadcrumb">
					<a class="section" href="/">back home</a>
					<i class="left chevron icon divider"></i>
					<div class="active section">
						{{ cookbook.name }}
					</div>
				</div>
			</div>
			<div class="ui right floated mini red button" @click="comingSoonMsg()" title="Be the first to know when there is a new submission into this cookbook.">
				<i class="ui bell icon"></i>
				SUBSCRIBE
			</div>
			<div class="ui images" v-if="cookbook.users.length > 0">
				<img class="ui mini circular image contributor-avatar"
					:title="user.name"
					:src="user.avatar"
					v-for="user in cookbook.users"
				>
				<div class="ui small button" title="View all contributors">
					<small class="contributors-count" v-if="cookbook.users.length == 1">
						Cookbook admin
					</small>
					<small class="contributors-count" v-else>
						{{ cookbook.users.length }} Contributor(s)
					</small>
				</div>
			</div>
		</div><br />
		<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column">
			<div class="ui message">
				{{ cookbook.description }} 
			</div>
			<br />
		</div>
		<div class="ui grid">
			<div class="fourteen wide column">
				<div v-if="cookbook.recipes.length > 0">
					<div v-for="recipe in cookbook.recipes" :key="recipe.id">
						<div class="ui grid">
							<div class="four wide computer column sixteen wide mobile column">
								<div class="ui header capitalized">
									<h3>{{ recipe.name }}</h3>
								</div>
								<div class="ui massive image">
									<div class="ui orange left ribbon label">
										Prep &#38; Cook Time: {{ recipe.total_time }}
									</div>
									<router-link :to="{
										name: 'Recipe',
										params: {
											cookbookId: cookbook.id,
											recipeId: recipe.id
										}}">
										<img 
											:src="recipe.imgUrl" 
											:alt="recipe.name"
											>
									</router-link>	
								</div>
								<div>
									<div class="ui mini fluid buttons">
										<div class="ui labeled button" tabindex="0">
											<div class="ui basic orange button" 
											title="This represents the number of varieties submitted for this recipe"
											>
												<i class="fork icon"></i> 
												{{ recipe.varieties_count }}
												</div>
											</div>
											<div class="ui orange button" @click="comingSoonMsg()" id="addRecipeButtonTitleText" tabindex="0">
												<i class="plus icon"></i> 
												Submit a variety
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
						<div v-else>
							<NothingToShowYou :htmlText="actionText" />
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
import NothingToShowYou from './NothingToShowYou.vue';
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';

export default {
	mounted() {
		this.$store.dispatch('reload_global_resources', this.$route.params.id)
	},
	computed: {
		cookbook() {
			return this.$store.getters['get_cookbook'](
				this.$route.params.id,
			);
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		}
	},
	data() {
		return {
			actionText: '<a href="/#/register">Sign up for a contributor account</a> today and start adding recipes right away.'
		}
	},
	methods: {
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
		NothingToShowYou,
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
.contributor-avatar {
	margin-right: -18px!important;;
}
.capitalized {
	text-transform: capitalize!important;
}
.contributors-count {
	padding-left: 5px;
}
</style>
