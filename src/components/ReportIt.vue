<template>
	<div>
		<div class="ui red button" :title="title" @click="ReportIt()">
			<i class="ui bug icon"></i>
			Report it
		</div>
		<div class="ui modal">
			<div class="header">
				Thank you for submitting this report!
			</div>
			<div class="scrolling content">
				<p>
					Every time you submit a report, you help make <a href="https://web.cookbookshq.com">cookbookshq</a>
					more reliable, safe and
					accessible to billions of other users on this platform and all over the internet. Thank you so much!
					To proceed, please select as many options as possible:
				</p>
				<div>
					<input type="checkbox" id="nudity" name="nudity" value="nudity">
					<label for="nudity">It contains Nudity</label><br /><br />

					<input type="checkbox" id="irrelevant" name="irrelevant" value="irrelevant">
					<label for="irrelevant">This content is irrelevant (it's not about a recipe)</label><br /><br />

					<input type="checkbox" id="violation" name="violation" value="violation">
					<label for="violation">It violates community guidelines. (see community guidelines <a href="https://web.cookbookshq.com/#/usage-policy">here</a>)</label><br /><br />

					<input type="checkbox" id="duplicate" name="duplicate" value="duplicate">
					<label for="duplicate">It is a duplicate.</label><br /><br />

					<input type="checkbox" id="plagiarism" name="plagiarism" value="plagiarism">
					<label for="plagiarism">It's plagiarism. The content originally belongs to me or someone
						else.</label><br /><br />

					<input type="checkbox" id="somethingelse" name="somethingelse" value="somethingelse">
					<label for="somethingelse">It's something else.</label><br /><br />
				</div>
				<br />
				<div>
					<label for="additionalinfo">Additional info: (Optional)</label>
					<br />
					<textarea id="additionalinfo" name="additionalinfo" rows="4" cols="50"></textarea>
				</div>
				<br />
				<div>
					<label for="emailorphone">Please provide your email or phone number: (Required*)</label>
					<br />
					<input type="text" name="emailorphone">
				</div>
				<br /><br />
				<div>
					<b>Our conflict resolution team will reach out to you if need be within 10-28 business days.</b>
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
			title: "Use this tool if you think this recipe is any of the following; inappropriate, unauthentic, not original, stolen or a duplicate."
		}
	},
	methods: {
		ReportIt() {
			let ff = $('.ui.modal').modal('show');
		}
	}
};
</script>
