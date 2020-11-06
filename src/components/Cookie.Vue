<template>
<div>
    <div class="ui inline cookie nag">
		<span class="title">
    		By using our site, you acknowledge that you have read and understood our 
			<a href="/#/cookie-policy">Cookie Policy,</a>
			<a href="/#/usage-policy">Usage Policy,</a>
			<a href="/#/data-retention-policy">Data Retention Policy,</a> and our 
			<a href="/#/terms-and-conditions">Terms &amp; Conditions</a>
  		</span>
  		<i class="close icon"></i>
	</div>
</div>
</template>

<script>
export default {
	name: "Cookie",
	data() {
		return {}
	}
};
</script>

<style scoped>
.title a {
	color:#dddddd; 
	text-decoration: underline;
}
</style>
