/**
 * @Author: Okosun Florence <florenceokosun>
 * @Date:   28-02-2018
 * @Email:  okosunuzflorence@gmail.com
 * @Filename: main.js
 * @Last modified by:   florenceokosun
 * @Last modified time: 01-03-2018
 */

// app entry file

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// window.$ = window.jQuery = require('jquery')
