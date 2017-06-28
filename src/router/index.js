import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import SignIn from '../components/SignIn.vue'
import SignOut from '../components/SignOut.vue'

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
    path: '/signout',
    name: 'Signout',
    component: SignOut
  }, {
    path: '/user/create',
    name: 'user.create'
  }]
})
