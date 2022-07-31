<template>
	<div>
		<div class="hideshowicon">
			<div v-if="inEditMode">
				hide editor<i class="ui chevron down icon" @click="toggleEditor('hide')"></i>
			</div>
			<div v-else>
				show editor<i class="ui chevron up icon" @click="toggleEditor('show')"></i>
			</div>
		</div>
		<br />

		<div id="cookbook-editor">
			<div>
				<UploadImage />
			</div>
			<div class="ui horizontal divider"></div>
			<div class="ui form">
				<div class="field">
					<label>Title (required*)</label>
					<input type="text" placeholder="Enter title" />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>About this Cookbook? (required*)</label>
					<textarea
						placeholder="A very good description will be about 300 characters long. This tells users what this cookbook is about. it may encourage users to add to your cookbook thereby increasing your visibility. Make the best use for it, good luck!"></textarea>
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>Select up to 3 categories (required*)</label>
					<div>
						<div class="ui labels">
							<a class="ui label" v-for="cat in _categories" :style="{ 'background-color': '#' + cat.color }">
								{{ cat.name }}
							</a>
						</div>
					</div>
					<input type="text" placeholder="Comma separated list of categories e.g Vegan" />
					<br /><br />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>Country Flag (Optional)</label>
					<input type="text" placeholder="Enter ISO code e.g ca for Canada, us for USA, ng for Nigeria" />
				</div>
			</div>
			<div class="ui horizontal divider"></div>
			<button class="fluid ui tbb button">Save</button>

		</div>

		<div class="ui horizontal divider"></div>
		<hr />
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
						<div class="ui mini image">
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
						<div class="ui mini image">
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
	computed: {
		_categories() {
			let cs = this.$store.state.cookbookStore.definitions.categories.contents
			console.log('hgfh', JSON.parse(cs))
			return JSON.parse(cs)
		}
	},
	data() {
		return {
			inEditMode: true
		}
	},
	components: {
		UploadImage
	},
	methods: {
		toggleEditor(action) {
			if (action === 'hide') {
				$("#cookbook-editor").removeClass("show")
				$("#cookbook-editor").addClass("hide")
			}

			if (action === 'show') {
				$("#cookbook-editor").addClass("show")
				$("#cookbook-editor").removeClass("hide")
			}
			this.inEditMode = !this.inEditMode
		}
	}
};
</script>

<style scoped>
.hideshowicon i {
	cursor: pointer !important;
}

.show {
	display: inline;
}

.hide {
	display: none !important;
}
</style>