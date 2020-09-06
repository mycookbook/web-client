<template>
  <div class="ui massive search">
    <div class="ui icon large fluid input">
      <input id="search-input" class="prompt" type="text" placeholder="Try &quot;flat tummy water recipe&quot;" />
      <i class="search icon sicon"></i>
    </div>
    <div class="results"></div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			results: [],
			Href: '/#/',
		};
	},
	methods: {
		buildHref(result) {
			return `${this.Href + (result.resource_type)}/${result.id}`;
		},
	},
};
</script>

<style>
.sicon {
	float: left;
	color: #0160CC!important;
	font-weight: 100!important;
	margin-right: 12px !important;
}
.prompt {
	font-weight: 300!important;
	line-height: 200%!important;
	padding-left:40px!important;
	border-radius: 0!important;
	border-top: none!important;
	border-left: none!important;
	border-right: none!important;
	/* box-shadow: 0 80px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
	background-color: #ffffff!important;
	font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}
</style>