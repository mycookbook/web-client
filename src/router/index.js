import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import SignIn from '../components/SignIn.vue'
import Feeds from '../components/Feeds.vue'

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
    path: '/:id/feeds',
    name: 'user.feeds',
    component: Feeds
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
