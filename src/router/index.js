import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'

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
      path: '/discover',
      name: 'Discover',
      component: {
        template: '<div> Discover </div>'
      }
    }, {
      path: '/help',
      name: 'Help',
      component: {
        template: '<div> Help </div>'
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
