<template>
	<div>
		<div class="hideshowicon">
			<div v-if="inEditMode">
				expand to create new<i class="ui chevron down icon" @click="toggleEditor('show')"></i>
			</div>
			<div v-else>
				Hide editor<i class="ui chevron up icon" @click="toggleEditor('hide')"></i>
			</div>
		</div>
		<br />

		<div id="cookbook-editor" v-if="!inEditMode">
			<div>
				<UploadImage :description="uploadMessageDescription" :imageDimensionMsg="imageDimensionMsg"
					:acceptTypes="acceptTypes" />
			</div>
			<div class="ui horizontal divider"></div>
			<div class="ui form">
				<div class="field">
					<label>Image alt Text (optional)</label>
					<input type="text" placeholder="Optional but strongly recommended" v-model="alt_text" />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>Title (required*)</label>
					<input type="text" placeholder="Enter title" v-model="cookbook_title" />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>About this Cookbook? (required*)</label>
					<textarea v-model="description"
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
								:style="{ 'background-color': '#' + cat.color }" @click="selectedCategory(cat.slug)">
								{{ cat.name }}
							</a>
						</div>
					</div>
					<input type="text" placeholder="Your selected categories show up here"
						v-model="selectedCategories" />
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
					<input type="text" v-model="flag" placeholder="Enter ISO code e.g ca for Canada, us for USA, ng for Nigeria" />
				</div>
			</div>
			<br />
			<div class="ui form">
				<div class="field">
					<label>
						<span>
							Keywords (Optional)
						</span>
					</label>
					<input type="text" v-model="keywords" placeholder="e.g #goals, #tiktok, #goals" />
				</div>
			</div>

			<div class="ui horizontal divider"></div>

			<div class="ui grid">
				<div class="six wide computer column sixteen wide mobile column">
					<button class="fluid ui black outline button" @click="saveAsDraft()">
						Save as draft
					</button>
				</div>
				<div class="ten wide computer column  sixteen wide mobile column">
					<button class="fluid ui tbb button" @click="save()">
						Save
					</button>
				</div>
			</div>

		</div>

		<div class="ui horizontal divider">
			<i class="camera icon"></i>
		</div>

		<div>
			<div class="ui horizontal divider"></div>
			<div v-if="_myCookbooks.length < 1">
				<em>You have no cookbooks.</em>
			</div>
			<div v-else>
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
							<span style="float:right!important; font-size: 16px;">
								<router-link :to="{ name: 'EditCookbook', params: { slug: cookbook.slug } }">
									edit |
								</router-link>
								<router-link :to="{ name: 'Dashboard', query: { tab: 'Drafts' } }">
									add recipe
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
		let username = this.$store.state.username
		this.$store.dispatch('fetch_contributor', username)
	},
	computed: {
		_categories() {
			let cs = this.$store.state.cookbookStore.definitions.categories.contents
			return JSON.parse(cs)
		},
		_myCookbooks() {
			return this.$store.state.contributor.cookbooks
		}
	},
	data() {
		return {
			inEditMode: true,
			uploadMessageDescription: "Upload Cookbook Cover Image",
			imageDimensionMsg: "Image dimension for best results (1127 x 650px)",
			acceptTypes: ".png",
			selectedCategories: '',
			cookbook_title: '',
			description: '',
			keywords: '',
			alt_text: '',
			flag: ''
		}
	},
	components: {
		UploadImage
	},
	methods: {
		toggleEditor(action) {
			if (action === 'hide') {
				$("#cookbook-editor").addClass("show")
				$("#cookbook-editor").removeClass("hide")
			}

			if (action === 'show') {
				$("#cookbook-editor").removeClass("show")
				$("#cookbook-editor").addClass("hide")
			}

			this.inEditMode = !this.inEditMode
		},
		selectedCategory(slug) {
			let selected = this.selectedCategories + ', '

			selected += slug + ', '

			this.selectedCategories = selected.slice(0, -2);

			if (this.selectedCategories.substring(0, 1) === ',') {
				this.selectedCategories = selected.slice(0, -2).substring(1);
			}

			let chars = this.selectedCategories.split(',')

			let uniqueChars = chars.filter((c, index) => {
				return chars.indexOf(c) === index;
			});

			this.selectedCategories = uniqueChars.toString()
		},
		save() {
			this.$store.dispatch('create_cookbook', this.getPayload())
		},
		saveAsDraft() {
			this.$store.dispatch('save_as_draft', this.getPayload())
		},
		getPayload() {
			return {
				'name': this.cookbook_title,
				'description': this.description,
				'categories': this.selectedCategories.trim(),
				'flag_id': this.flag,
				'keywords': this.keywords,
				'bookCoverImg': 'https://media-exp1.licdn.com/dms/image/C5603AQGKdRvQJbmLqw/profile-displayphoto-shrink_400_400/0/1662683412684?e=1670457600&v=beta&t=wiLPkRzrltHPOsudDg6lyo3Tg4NzTANQaa7g78i_Pss',
				'user_id': this.$store.state.username,
				'alt_text': this.alt_text
			}
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
</style>