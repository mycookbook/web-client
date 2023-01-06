/**
 * @Author: Okosun Florence <florenceokosun>
 * @Date:   28-02-2018
 * @Email:  okosunuzflorence@gmail.com
 * @Filename: main.js
 * @Last modified by:   florenceokosun
 * @Last modified time: 01-03-2018
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from '@/store';
import Vue2Editor from "vue2-editor";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vue2Editor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
