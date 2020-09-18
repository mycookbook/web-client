<template>
<div>
	<div class="ui grid">
		<div class="fourteen wide computer column sixteen wide mobile column">
			<div class="ui secondary menu flex-container">
				<router-link :to="{
					name: 'TermsAndConditions'
				}">
					<a class="item" title="CookbooksHQ Terms And Conditions. Property of cookbookshq.com">
						Terms &amp; Conditions
					</a>
        		</router-link>
        		<router-link :to="{
          			name: 'DataRetentionPolicy'
          		}">
				  	<a class="item" title="CookbooksHQ Data Retention Policy. Property of cookbookshq.com">
						  Data Retention Policy
					</a>
				</router-link>
				<router-link :to="{
					name: 'Home'
				}">
					<a class="item" title="API and Documentation for developers">
						API <sup class="ui mini label beta">Beta</sup>
					</a>
        		</router-link>
			</div>
		</div>
		<div class="two wide computer column sixteen wide mobile column secondary menu">
			<div class="ui secondary menu flex-container">
				<a class="item" title="Get fresh updates about new submissions, events and more by following our facebook page. Property of cookbookshq.com">
					<i class="facebook f icon"></i>
				</a>
				<a class="item" title="Get latest updates from our global recipes base in real time by following our Twitter handle. Property of cookbookshq.com">
					<i class="twitter t icon"></i>
				</a>
				<a class="item" title="Get latest updates from our global recipes base in real time by following our Instagram handle. Property of cookbookshq.com">
					<i class="instagram icon"></i>
				</a>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
.beta {
	background: #daa520!important;;
}
</style>
