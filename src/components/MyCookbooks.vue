<template>
	<div>
		<div>
			<UploadImage />
		</div>
		<div class="ui horizontal divider"></div>
		<div class="ui form">
			<div class="field">
				<label>About this Cookbook? (required*)</label>
				<textarea
					placeholder="A very good description will be about 300 characters long. This tells users what this cookbook is about. it may encourage users to add to your cookbook. Make the best use for it, good luck!"></textarea>
			</div>
		</div>
		<div class="ui horizontal divider"></div>
		<button class="fluid ui tbb button">Save</button>
		<div class="ui horizontal divider"></div>
		<div>
			<div>
				<small>
					<b>showing 100 results</b>
				</small>
			</div>
			<div class="ui horizontal divider"></div>
			<div>
				<div class="ui items">
					<div class="item">
						<div class="ui tiny image">
							<img src="https://tinyurl.com/aek9pjuw">
						</div>
						<div class="content">
							<a class="header" href="">
								<small>Title</small>
							</a>
							<div class="meta">
								<span>Truncated Description ...</span>
							</div>
							<div class="description">
								<p></p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="ui tiny image">
							<img
								src="https://cookbookshq.s3.us-east-2.amazonaws.com/87056075-7837-4a2a-90ad-6ac6d28f92c8.JPG">
						</div>
						<div class="content">
							<a class="header" href="">
								<small>Title</small>
							</a>
							<div class="meta">
								<span>Truncated Description ...</span>
							</div>
							<div class="description">
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UploadImage from './UploadImage.vue';

export default {
	name: "MyCookbooks",
	mounted() { },
	computed: {
		example() {
			return true
		}
	},
	props: {
		numbers: Array
	},
	data() {
		return {
			title: 'This is an Example component'
		}
	},
	filters: {
		exampleFilter() { }
	},
	components: {
		UploadImage
	}
};
</script>

<style scoped>
.example-class {
	color: #000000;
}
</style>