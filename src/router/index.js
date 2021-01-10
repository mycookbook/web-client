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

Vue.use(Router);

export default new Router({
  	routes: [
		{
			path: '/',
			name: 'Home',
			component: LandingPage,
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
		}, {
			path: '/cookbook/:id',
			name: 'Cookbook',
			component: Cookbook,
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId',
			name: 'Recipe',
			component: Recipe,
		}, {
			path: '/contributors/(@):username',
			name: 'ContributorProfile',
			component: ContributorProfile
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId/variety/:varietyId',
			name: 'Variety',
			component: Variety
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId/varieties',
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
