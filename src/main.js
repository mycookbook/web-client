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

import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from '@/store';
// import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// window.$ = window.jQuery = require('jquery')
