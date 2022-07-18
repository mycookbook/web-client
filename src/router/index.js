import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';
import Cookbook from '@/components/Cookbook';
import Recipe from '@/components/Recipe';
import Register from '@/components/Register';
import UsagePolicy from '@/components/policies/UsagePolicy';
import CookiePolicy from '@/components/policies/CookiePolicy';
import DataRetentionPolicy from '@/components/policies/DataRetentionPolicy';
import TermsAndConditions from '@/components/policies/TermsAndConditions';
import VarietiesList from '@/components/VarietiesList.vue';
import Variety from '@/components/Variety.vue';
import ContributorProfile from '@/components/ContributorProfile.vue';
import Developers from '@/components/Developers.vue';
import SearchResults from '@/components/SearchResults.vue';
import NotFound from '@/components/NotFound.vue';
import CookbooksBy from '@/components/CookbooksBy.vue';
import CreateRecipe from '@/components/CreateRecipe.vue';
import VueRouteMiddleware from 'vue-route-middleware';
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'

Vue.use(Router);

const VueRouter = new Router({
	mode: 'history',
  	routes: [
		{
			path: '/',
			name: 'Home',
			component: LandingPage
		}, {
			path: '/usage-policy',
			name: 'UsagePolicy',
			component: UsagePolicy,
		}, {
			path: '/cookie-policy',
			name: 'CookiePolicy',
			component: CookiePolicy,
		}, {
			path: '/data-retention-policy',
			name: 'DataRetentionPolicy',
			component: DataRetentionPolicy,
		}, {
			path: '/terms-and-conditions',
			name: 'TermsAndConditions',
			component: TermsAndConditions,
		}, {
			path: '/register',
			name: 'Register',
			component: Register,
			meta: {
				middleware: (to, from, next) => {
					let auth = localStorage.isLogged;
					
					if (auth){
						next({ name: 'Register' });
					}
				}
			}
		}, {
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard,
			meta: {
				middleware: (to, from, next) => {
					let auth = localStorage.isLogged;
					
					if (!auth){
						next({ name: 'Register' });
					}
				}
			}
		}, {
			path: '/profile',
			name: 'Profile',
			component: Profile,
			meta: {
				middleware: (to, from, next) => {
					let auth = localStorage.isLogged;
					
					if (!auth){
						next({ name: 'Register' });
					}
				}
			}
		}, {
			path: '/cookbooks/:slug',
			name: 'Cookbook',
			component: Cookbook,
			props: true
		}, {
			path: '/recipes/:slug',
			name: 'Recipe',
			component: Recipe,
			props: true
		}, {
			path: '/recipes/create',
			name: 'CreateRecipe',
			component: CreateRecipe,
			props: true,
			meta: {
				middleware: (to, from, next) => {
					let auth = localStorage.isLogged;
					
					if (!auth){
						next({ name: 'Register' });
					}
				}
			}
		}, {
			path: '/contributors/(@):username',
			name: 'ContributorProfile',
			component: ContributorProfile
		}, {
			path: '/cookbooks/by/(@):username',
			name: 'CookbooksBy',
			component: CookbooksBy
		}, {
			path: '/recipes/:recipe_slug/varieties/:variety_slug',
			name: 'Variety',
			component: Variety,
			prop: true
		}, {
			path: '/recipes/:recipe_slug/varieties/',
			name: 'VarietiesList',
			component: VarietiesList,
		}, {
			path: '/developers',
			name: 'Developers',
			component: Developers
		}, {
			path: '/search',
			name: 'SearchResults',
			component: SearchResults
		}, {
		path: '*',
		component: NotFound
    }]
});

VueRouter.beforeEach(VueRouteMiddleware());

export default VueRouter;
