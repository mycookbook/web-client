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

import Cookie from './components/Cookie.vue';

export default {
	mounted() {
		this.$store.dispatch("unload_global_error_object")
		this.$store.dispatch("unload_global_success_object")
	},
	name: 'app',
	components: {
		Cookie
	}
}
</script>
