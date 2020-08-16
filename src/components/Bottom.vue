<template>
<div>
	<div class="ui grid">
		<div class="twelve wide computer column sixteen wide mobile column">
			<div class="ui secondary menu flex-container footer-contents">
				<a class="item" href="/">
					Home
				</a>
				<router-link :to="{
					name: 'TermsAndConditions'
				}">
					<a class="item rl-fix" title="Find out how to use this website">
						Terms &amp; Conditions
					</a>
        		</router-link>
        		<router-link :to="{
          			name: 'DataRetentionPolicy'
          		}">
				  	<a class="item rl-fix" title="Find out how to use this website">
						  Data Retention Policy
					</a>
				</router-link>
				<router-link :to="{
					name: 'Disclaimer'
				}">
					<a class="item rl-fix" itle="Find out how to use this website">
						Disclaimer
					</a>
				</router-link>
			</div>
		</div>
		<div class="ui four wide computer column sixteen wide mobile column secondary menu">
			<div class="ui secondary menu flex-container footer-contents">
				<a class="item">
					<i class="facebook f icon"></i>
				</a>
				<a class="item">
					<i class="twitter t icon"></i>
				</a>
				<a class="item">
					<i class="instagram icon"></i>
				</a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {}
	}
}
</script>

<style>
footer {
	border-top: 1px solid #eee;
	padding: 20px 0px 0px;
}
.footer-contents {
	margin:2%!i-topmportant;
	margin-bottom: 5%!important;
}
</style>
