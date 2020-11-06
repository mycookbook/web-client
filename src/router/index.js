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
		path: '/cookbook/:cookbookId/recipes/:recipeId/contributors/:username',
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
		path: '/discover',
		name: 'Discover',
		component: {
			template: '<div> Discover </div>',
		}
    }, {
		path: '/dashboard',
		name: 'Dashboard',
		component: {
			template: '<div> Dashboard, welcome </div>',
		}
    }, {
		path: '/help',
		name: 'Help',
		component: {
			template: '<div> Help </div>',
		}
    }, {
		path: '/recipes/all',
		name: 'view.recipes',
		component: {
			template: '<div>see all recipes</div>',
		}
    }, {
		path: '/developers',
		name: 'Developers',
		component: Developers
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
