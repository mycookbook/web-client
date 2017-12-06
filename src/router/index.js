import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import LogIn from '@/components/auth/Login.vue'
import SignUp from '@/components/auth/Signup.vue'
import SignOut from '@/components/SignOut.vue'
import Cookbook from '@/components/Cookbook.vue'
import LandingPage from '@/components/LandingPage'
import Recipe from '@/components/Recipe.vue'
import Discover from '@/components/Discover'
import Help from '@/components/Help'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: true,
  history: true,
  base: '/',
  routes: [{
    path: '/',
    name: 'Home',
    component: LandingPage
  }, {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }, {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }, {
    path: '/signout',
    name: 'SignOut',
    component: SignOut
  }, {
    path: '/cookbook',
    name: 'create.cookbook',
    component: Cookbook
  }, {
    path: '/recipe',
    name: 'create.recipe',
    component: Recipe
  }, {
    path: '/discover',
    name: 'Discover',
    component: Discover
  }, {
    path: '/help',
    name: 'Help',
    component: Help
  }, {
    path: '/recipes/all',
    component: {
      template: '<div>' +
      '<h1>Recipes</h1>' +
      'Display all recipes' +
      '</div>'
    }
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
