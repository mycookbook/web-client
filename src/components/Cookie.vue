<template>
	<div>
		<div class="ui inline cookie nag top fixed">
			<span class="ui title">
				By using this website, you acknowledge that you have read and understood our
				<a href="/#/privacy-policy">Privacy Policy,</a>
				<a href="/usage-policy">Usage Policy,</a> and our
				<a href="/terms-and-conditions">Terms &amp; Conditions</a>
			</span>
			<span id="cookie-dismiss">
				<i class="close icon"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
};
</script>

<style scoped>
.title a {
	color: #dddddd;
	text-decoration: underline;
}

#cookie-dismiss {
	cursor: pointer;
	float: right !important;
	color: white;
}
</style>
