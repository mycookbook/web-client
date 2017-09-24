import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import SignIn from '../components/SignIn.vue'
import User from '../components/User.vue'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }, {
    path: '/user/:username',
    name: 'user.profile',
    component: User
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
