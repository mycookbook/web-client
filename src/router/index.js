import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function lazyLoad(view){
  return() => import(`@/components/${view}.vue`)
}

export default new Router({
	mode: 'history',
  	routes: [
		{
			path: '/',
			name: 'Home',
			component: lazyLoad('LandingPage'),
		}, {
			path: '/usage-policy',
			name: 'UsagePolicy',
			component: lazyLoad('UsagePolicy'),
		}, {
			path: '/cookie-policy',
			name: 'CookiePolicy',
			component: lazyLoad('CookiePolicy'),
		}, {
			path: '/data-retention-policy',
			name: 'DataRetentionPolicy',
			component: lazyLoad('DataRetentionPolicy'),
		}, {
			path: '/terms-and-conditions',
			name: 'TermsAndConditions',
			component: lazyLoad('TermsAndConditions'),
		}, {
			path: '/register',
			name: 'Register',
			component: lazyLoad('Register'),
		}, {
			path: '/cookbook/:id',
			name: 'Cookbook',
			component: lazyLoad('Cookbook'),
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId',
			name: 'Recipe',
			component: lazyLoad('Recipe'),
		}, {
			path: '/cookbook/:cookbookId/recipes/:recipeId/contributors/:username',
			name: 'ContributorProfile',
			component: lazyLoad('ContributorProfile')
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId/variety/:varietyId',
			name: 'Variety',
			component: lazyLoad('Variety')
		}, {
			path: '/cookbook/:cookbookId/recipe/:recipeId/varieties',
			name: 'VarietiesList',
			component: lazyLoad('VarietiesList'),
		}, {
			path: '/developers',
			name: 'Developers',
			component: lazyLoad('Developers')
		}, {
			path: '/search',
			name: 'SearchResults',
			component: lazyLoad('SearchResults')
		}, {
		path: '*',
		component: {
			template: '<div>' +
			'<h1>404</h1>' +
			'Page Not Found' +
			'</div>',
		}
    }]
});
