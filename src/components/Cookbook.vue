<template>
<div class="ui container">
	<Navigation />
	<div v-if="isLoading">
		<CookbookPageSkeleton />
	</div>
	<div v-else>
		<div class="ui grid">
			<div class="ten wide computer column ten wide mobile column ten wide tablet column ten wide large screen column">
				<div class="ui header cookbook-title">
					<div class="ui small breadcrumb">
						<a class="section" href="/">back home</a>
						<i class="left chevron icon divider"></i>
						<div class="active section">
							{{ cookbook.name }}
						</div>
					</div>
				</div>
			</div>
			<div class="six wide computer column six wide mobile column six wide tablet column six wide large screen column">
				<div class="ui right floated mini disabled red button" title="Be the first to know when there is a new submission into this cookbook.">
					<i class="ui bell icon"></i>
					SUBSCRIBE
				</div>
			</div>
		</div>
		<div class="ui grid">
			<div class="sixteen wide mobile column 
				sixteen wide tablet column 
				sixteen wide computer column 
				sixteen wide large screen column"
			>
				<div class="ui grid">
					<div class="eight wide computer column sixteen wide mobile column">
						<div class="ui fluid image">
							<a class="ui left corner label">
								<i class="unlock icon" title="This cookbook is public. Login to your contributor account to add a recipe into this cookbook."></i>
							</a>
							<img :src="cookbook.bookCoverImg" class="ui fluid image" alt="">
						</div>
						<p>
							{{ cookbook.description | truncate(230, '...') }}
						</p>
						<span>
							<i class="ui chevron circle down icon"></i>
						</span>
						<span>
							see more
						</span>
						<span>
							<i class="ui chevron circle up icon"></i>
						</span>
						<span>
							see less
						</span>
						<div class="ui tiny message" v-if="!cookbook.is_locked">
							DISCLAIMER: <br />
							<small>
								This is a public repository. The contributions made 
								herein are from different contributors across the globe, 
								therefore, contents are opinionated. Cookbookshq shall not 
								be held liable for any misunderstanding of the descriptions 
								therein, or any inaccuracies encountered. 
							</small>
						</div>
					</div>
					<div class="eight wide computer column sixteen wide mobile column">
						<div v-if="cookbook.users.length > 0">
							<CookbookContributors :contributors="cookbook.users" :author="cookbook.author.name" />
						</div>
						<div class="margin-up-down"></div>
						<div v-if="cookbook.recipes.length > 0">
							<div v-for="recipe in cookbook.recipes" :key="recipe.id">
								<div class="ui grid">
									<div class="sixteen wide mobile column 
										sixteen wide tablet column 
										sixteen wide computer column 
										sixteen wide large screen column"
									>
										<div class="ui header capitalized">
											<span>
												<h3>
													{{ recipe.name }}
												</h3>
											</span>
										</div>
										<div style="margin-top:-15px!important;font-size: .89em!important;color: rgba(0,0,0,.5);">
											<div>
												<span>
													<p>
														Contributed by {{ recipe.author.name }}
													</p>
												</span>
												<small>
													{{ recipe.claps }} CLAP(S)
												</small>
											</div>
											<div>
												<small>
													<a href="/#/">{{ recipe.varieties_count }} VARIETIE(S)</a> SUBMITTED
												</small>
											</div>
										</div>
										<div class="ui medium fluid left floated image">
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
											<div class="ui light blue label ingredients-list"
											v-for="ingredient in recipeIngredients(recipe.ingredients)"
											v-bind:key="ingredient.id">
												{{ ingredient }}
											</div>
										</div>
										<p>{{ recipe.summary }}</p>
									</div>
									</div>
								</div>
							</div>
							<div v-else>
								<p>
									<em>
										<i class="ui terminal icon"></i>
										nothing to show you. <br />
										<a href="https://contribute.cookbookshq.com/login">Login</a> to your contributor account to start adding recipes.
									</em>
								</p>
							</div>
						</div>
					</div>
				</div>
			<Contact />
			<Bottom />
		</div>
	</div>
</div>
</template>

<script>
import CookbookContributors from './CookbookContributors';
import NothingToShowYou from './NothingToShowYou.vue';
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import CookbookPageSkeleton from './Skeletons/CookbookPageSkeleton.vue';

export default {
	mounted() {
		this.$store.dispatch('fetch_cookbook', this.$route.params.id)
	},
	computed: {
		cookbook() {
			return this.$store.state.cookbook
		},
		isLoading() {
			return this.$store.state.resource_isLoading
		}
	},
	data() {
		return {
			actionText: '<a href="http://contribute.cookbookshq.com/login">Login to your contributor account</a> today and start adding recipes right away.'
		}
	},
	filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
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
		CookbookContributors,
		CookbookPageSkeleton,
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
.margin-up-down {
	margin: 55px 0 60px 0;
}
p {
    color: rgba(0,0,0,.5);
}
</style>
