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
				<!--<div class="ui right floated mini buttons">
					<div 
						class="ui mini red button" 
						title="Be the first to know when there is a new submission into this cookbook." 
						@click="showSubscriptionForm()"
					>
						<i class="ui bell icon"></i>
						SUBSCRIBE
					</div>
					<div class="ui right floated mini disabled button">
						<i class="ui bell slash icon"></i>
						SUBSCRIBED
					</div>
				</div>-->
				<div class="ui right floated tiny button">
					<div>
						<i class="ui light blue twitter icon"></i> 20.5K tweets
					</div>
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
					<div class="ui labels">
						<a class="ui tiny label" v-for="category in cookbook.categories" :style="{ 'background-color': getBgColor(category.color)}">
							<span>{{ category.name }}</span>
							<span v-html="category.emoji"></span>
						</a>
					</div>
						<div class="ui fluid image">
							<a class="ui left corner label">
								<i class="unlock icon" title="This cookbook is public. Login to your contributor account to add a recipe into this cookbook."></i>
							</a>
							<img :src="cookbook.bookCoverImg" class="ui fluid image" alt="">
						</div>
						<p v-if="seeMore">
							{{ cookbook.description | truncate(230, '...') }}
						</p>
						<p v-else style="text-align:justify!important;">
							{{ cookbook.description }}
						</p>
						<div @click="seeMoreOrLess()">
							<span class="click" v-if="seeMore">
								<i class="ui chevron circle down icon"></i>see more
							</span>
							
							<span class="click" v-else>
								<i class="ui chevron circle up icon"></i>see less
							</span>
						</div>
						
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
						<!--<div v-if="subscribed" v-model="subscribed">
							<div class="ui form">
								<div class="field">
									<label>Subscribe to this Cookbook</label>
									<input type="text" placeholder="Enter your email address and press the enter button">
								</div>
							</div>
							<br />
						</div>-->
						
						<div v-if="cookbook.users.length > 0">
							<CookbookContributors :contributors="cookbook.users" :author="cookbook.author.name" />
						</div>
						<div class="margin-up-down"></div>
							<RecipesList :recipes="recipes" :cookbookId="cookbook.id" />
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
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import CookbookPageSkeleton from './Skeletons/CookbookPageSkeleton.vue';
import RecipesList from './RecipesList.vue'

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
		},
		seeMore() {
			return this.$store.state.cookbookStore.seeMore
		},
		recipes() {
			return this.$store.state.cookbook.recipes
		}
	},
	data() {
		return {
			subscribed: false
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
		seeMoreOrLess() {
			this.$store.dispatch('see_more_or_less')
		},
		getBgColor(code) {
			return `#${code}`;
		},
		showSubscriptionForm() {
			this.subscribed = !this.subscribed
		}
	},
	components: {
		CookbookContributors,
		CookbookPageSkeleton,
		RecipesList,
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
.contributor-avatar {
	margin-right: -18px!important;;
}
p {
    color: rgba(0,0,0,.5);
}
.click {
	cursor: pointer!important;
}
.margin-up-down {
	margin: 45px 0 45px 0;
}
</style>
