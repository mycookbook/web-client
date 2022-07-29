<template>
<div id="home page" class="tvn page">
<Cookie />
	<router-view></router-view>
</div>
</template>

<script>
require('./assets/js/jquery.min.js');
require('./assets/js/semantic.min.js');
require('./assets/js/script.js');

import Vue from 'vue';
import Skeleton from 'vue-loading-skeleton';
import Cookie from './components/Cookie.vue';

Vue.use(Skeleton)

export default {
	mounted() {
		let route = this.$route.name

		if (route === 'Recipe') {
			this.$router.push({ name: 'Recipe', slug: this.$route.params.slug });
		}
	},
	name: "App",
	components: {
		Cookie
	}
}
</script>
