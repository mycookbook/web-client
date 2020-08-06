import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';
import Signout from '@/components/auth/Signout';
import Cookbook from '@/components/Cookbook';
import Recipe from '@/components/Recipe';
import FeatureRequest from '@/components/FeatureRequest';
import UsagePolicy from '@/components/legal/UsagePolicy';
import DataRetentionPolicy from '@/components/legal/DataRetentionPolicy';
import Disclaimer from '@/components/legal/Disclaimer';
import TermsAndConditions from '@/components/legal/TermsAndConditions';
import SearchResults from '@/components/SearchResults';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage,
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
    }, {
      path: '/usage-policy',
      name: 'UsagePolicy',
      component: UsagePolicy,
    }, {
      path: '/data-retention-policy',
      name: 'DataRetentionPolicy',
      component: DataRetentionPolicy,
    }, {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer,
    }, {
      path: '/terms-and-conditions',
      name: 'TermsAndConditions',
      component: TermsAndConditions,
    }, {
      path: '/cookbook/:id',
      name: 'Cookbook',
      component: Cookbook,
    }, {
      path: '/cookbook/:cookbookId/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe,
    }, {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults,
    }, {
      path: '/feature-request',
      name: 'FeatureRequest',
      component: FeatureRequest,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/signout',
      name: 'Signout',
      component: Signout,
    }, {
      path: '/discover',
      name: 'Discover',
      component: {
        template: '<div> Discover </div>',
      },
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: {
        template: '<div> Dashboard, welcome </div>',
      },
    }, {
      path: '/help',
      name: 'Help',
      component: {
        template: '<div> Help </div>',
      },
    }, {
      path: '/recipes/all',
      name: 'view.recipes',
      component: {
        template: '<div>see all recipes</div>',
      },
    }, {
      path: '*',
      component: {
        template: '<div>' +
        '<h1>404</h1>' +
        'Page Not Found' +
        '</div>',
      },
    }],
});
