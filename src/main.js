// app entry file

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import SignIn from './components/SignIn.vue'
// import SignOut from './components/SignOut.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// Vue.use(VueRouter)
//
// let router = new VueRouter()
//
// router.map({
//   '/login': {
//     component: SignIn
//   },
//   'logout': {
//     component: SignOut
//   }
// })
//
// router.start(App, 'body')
