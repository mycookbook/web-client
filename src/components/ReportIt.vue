<template>
	<div class="ui red disabled button" :title="title">
		<i class="ui file outline icon"></i>
		Report it
	</div>
</template>

<script>
export default {
	name: "ReportIt",
	props: {
		numbers: Array
	},
	data() {
		return {
			title: "Use this tool if you think this recipe is any of the following; inappropriate, unauthentic, not original, stolen or a duplicate. If you think this content was stolen and you can prove it, kindly provide as much detail as possible to enable us investigate and delete the content from our servers. Alternatively, you can register to become a cookbook contributor and then ownership will be transffered to you upon request."
		}
	}
};
</script>
