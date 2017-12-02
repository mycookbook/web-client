import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import Hello from '@/components/Hello'
import SignIn from '../components/SignIn.vue'
import SignOut from '../components/SignOut.vue'
// import UserProfile from '../components/UserProfile.vue'
import Cookbook from '../components/Cookbook.vue'
import Recipe from '../components/Recipe.vue'
import LandingPage from '@/components/LandingPage'
import Cookbooks from '@/components/CookbookList'
import Recipes from '@/components/RecipeList'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Hello',
    component: LandingPage
  }, {
    path: '/signin/',
    name: 'SignIn',
    component: SignIn
  }, {
    path: '/signout',
    name: 'SignOut',
    component: SignOut
  }, {
    path: '/cookbook',
    name: 'create.cookbook',
    component: Cookbook
  }, {
    path: '/cookbooks',
    name: '.view.cookbooks',
    component: Cookbooks
  }, {
    path: '/recipe',
    name: 'create.recipe',
    component: Recipe
  }, {
    path: '/recipes',
    name: 'view.recipes',
    component: Recipes
  }, {
    path: '*',
    component: {
      template: '<div>' +
      '<h1>404</h1>' +
      'Page Not Found' +
      '</div>'
    }
  }]
})
