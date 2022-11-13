<template>
<div id="home page" class="tvn page">
<Cookie />
	<router-view></router-view>
</div>
</template>

<script>
require('./assets/js/script.js');
require('../semantic/dist/semantic.min.css')
require('../semantic/dist/semantic.min.js')

import Vue from 'vue';
import Skeleton from 'vue-loading-skeleton';
import Cookie from './components/Cookie.vue';

Vue.use(Skeleton)

export default {
	name: "App",
	components: {
		Cookie
	}
}
</script>
