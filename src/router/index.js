import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Signout from '@/components/auth/Signout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signout',
      name: 'Signout',
      component: Signout
    }, {
      path: '/discover',
      name: 'Discover',
      component: {
        template: '<div> Discover </div>'
      }
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: {
        template: '<div> Dashboard, welcome </div>'
      }
    }, {
      path: '/help',
      name: 'Help',
      component: {
        template: '<div> Help </div>'
      }
    }, {
      path: '/recipes/all',
      name: 'view.recipes',
      component: {
        template: '<div>see all recipes</div>'
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
