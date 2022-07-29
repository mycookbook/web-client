<template>
	<div>
		<div class="ui red button" :title="title" @click="ReportIt()">
			<i class="ui file outline icon"></i>
			Report it
		</div>
		<div class="ui modal">
			<div class="header">
				Thank you for submitting this report!
			</div>
			<div class="scrolling content">
				<p>
					Every time you submit a report, you help make <a href="https://web.cookbookshq.com">cookbookshq</a> more reliable, safe and 
					accessible to billions of others users on this platform and all over the internet. Thank you so much!
					To proceed, please select one of the following options:
				</p>
				<div>
					<input type="radio" id="nudity" name="nudity" value="nudity">
					<label for="nudity">It contains Nudity</label><br /><br />

					<input type="radio" id="irrelevant" name="irrelevant" value="irrelevant">
					<label for="css">This content is irrelevant (it's not about a recipe)</label><br /><br />

					<input type="radio" id="javascript" name="fav_language" value="JavaScript">
					<label for="javascript">It is a duplicate.</label><br /><br />

					<input type="radio" id="javascript" name="fav_language" value="JavaScript">
					<label for="javascript">It's plagiarism. The content originally belongs to me or someone else.</label><br /><br />

					<input type="radio" id="javascript" name="fav_language" value="JavaScript">
					<label for="javascript">It's something else.</label><br /><br />
				</div>
				<br />
				<div>
					<b>Our conflict resolution team will reach out to you if need be within 4-10 business days.</b>
				</div>
				<hr />
				<div class="ui tbb button">
					Submit
				</div>
			</div>
		</div>
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
	},
	methods: {
		ReportIt() {
			let ff = $('.ui.modal').modal('show');
		}
	}
};
</script>
