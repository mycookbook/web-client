import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import SignIn from '../components/SignIn.vue'
import SignOut from '../components/SignOut.vue'
import Dashboard from '../components/Dashboard.vue'
import UserProfile from '../components/UserProfile.vue'
import Cookbook from '../components/Cookbook.vue'
import Recipe from '../components/Recipe.vue'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }, {
    path: '/signout',
    name: 'SignOut',
    component: SignOut
  }, {
    path: '/dashboard',
    name: 'user.dashboard',
    component: Dashboard
  }, {
    path: '/account',
    name: 'user.account',
    component: UserProfile
  }, {
    path: '/cookbook',
    name: 'user.create.cookbook',
    component: Cookbook
  }, {
    path: '/recipe',
    name: 'user.create.recipe',
    component: Recipe
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
