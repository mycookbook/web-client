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
							<a class="ui label" v-for="cat in _categories"
								:style="{ 'background-color': '#' + cat.color }">
								{{ cat.name }}
							</a>
						</div>
					</div>
					<input type="text" placeholder="Your selected categories show up here" />
					<br /><br />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>
						<span>
							Country Flag (Optional)
						</span>
						<span style="float:right!important;">
							<a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">
								<i class="ui wikipedia icon"></i>
							</a>
						</span>
					</label>
					<input type="text" placeholder="Enter ISO code e.g ca for Canada, us for USA, ng for Nigeria" />
				</div>
			</div>
			<div class="ui horizontal divider"></div>
			<button class="fluid ui tbb button">Save</button>

		</div>

		<div class="ui horizontal divider">
			<i class="camera icon"></i>
		</div>

		<div>
			<div class="cookbooks-showing">
				showing 1 - 100 of 20 results
			</div>
			<div class="ui horizontal divider"></div>
			<div>
				<div class="ui items">
					<div class="item" v-for="cookbook in _myCookbooks">
						<div class="ui tiny image">
							<img :src="cookbook.bookCoverImg">
						</div>
						<div class="content">
							<a class="header" href="">
								<small>
									<span>
										<router-link :to="{ name: 'Cookbook', params: { slug: cookbook.slug } }">
											{{ cookbook.name }}
										</router-link>
									</span>
								</small>
							</a>
							<span style="float:right!important;">
								<router-link :to="{ name: 'EditCookbook', params: { slug: cookbook.slug } }">
									edit
								</router-link>
							</span>
							<div class="meta">
								<span>
									{{ cookbook.description | truncate(115, '...') }}
								</span>
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
	mounted() {
		let username = this.$store.state.active_user.username
		this.$store.dispatch('fetch_contributor', username)
	},
	computed: {
		_categories() {
			let cs = this.$store.state.cookbookStore.definitions.categories.contents
			return JSON.parse(cs)
		},
		_myCookbooks() {
			console.log("contributor", this.$store.state.cookbookStore.cookbooks)

			return this.$store.state.cookbookStore.cookbooks
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
	},
	filters: {
		truncate: function (text, length, suffix) {
			if (text.length > length) {
				return text.substring(0, length) + suffix;
			} else {
				return text;
			}
		},
	},
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

.cookbooks-showing {
	color: grey;
}
</style>