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
import SearchResults from '@/components/SearchResults.vue';
import NotFound from '@/components/NotFound.vue';
import CreateRecipe from '@/components/CreateRecipe.vue';
import Dashboard from '@/components/Dashboard'
import store from '@/store'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import EditCookbook from '@/components/EditCookbook'
import ErrorPage from '@/components/ErrorPage'
import Help from '@/components/Help'
import auth from '../middleware/auth.js';
import SubscriptionPlans from '@/components/Widgets/SubscriptionPlans'
import Marketplace from '@/components/Marketplace'

Vue.use(Router);

const VueRouter = new Router({
  mode: 'hash',
  fallback: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage
    }, {
      path: '/tiktok',
      meta: {
        middleware: (to, from, next) => {
          const queryString = window.location.href;

          let replaced = queryString.replace("/#/", "/");
          let url = new URL(replaced);
          let code = url.searchParams.get("token");
          let username = url.searchParams.get('_d')

          if (!username) username = process.env.DEV_USERNAME
          if (!code) code = process.env.DEV_TOKEN

          store.dispatch('set_active_user', {
            code: code,
            username: username
          })

          store.dispatch('fetch_active_user', username)
        }
      }
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
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    }, {
      path: '/signin',
      name: 'Register',
      component: Register
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: {
        default: true,
      },
      meta: {
        middleware: auth,
      }
    }, {
      path: '/help',
      name: 'Help',
      component: Help,
      props: {
        default: true,
      }
    }, {
      path: '/cookbooks/:slug',
      name: 'Cookbook',
      component: Cookbook,
      props: true
    }, {
      path: '/cookbooks/:slug',
      name: 'EditCookbook',
      component: EditCookbook,
      meta: {
        middleware: auth,
      }
    }, {
      path: '/recipes/:slug',
      name: 'Recipe',
      component: Recipe,
      props: true
    },
    {
      path: '/recipes/create',
      name: 'CreateRecipe',
      component: CreateRecipe,
      props: true,
      meta: {
        middleware: auth,
      }
    }, {
      path: '/contributors/:username',
      name: 'ContributorProfile',
      component: ContributorProfile,
      prop: true
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
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    }, {
      path: '/plans',
      name: 'SubscriptionPlans',
      component: SubscriptionPlans
    }, {
      path: '/marketplace',
      name: 'Marketplace',
      component: Marketplace
    }, {
      path: '/errors',
      name: 'ErrorPage',
      component: ErrorPage
    }, {
      path: '*',
      component: NotFound
    }]
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

VueRouter.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      VueRouter,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
})

export default VueRouter;
