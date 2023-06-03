<template>
	<div>
		<div class="ui threaded comments">
			<h3 class="ui dividing header">
				<div class="sixteen wide computer column sixteen wide mobile column" v-if="isCollapsed">
					{{ comments.length }} Comments <i class="ui chevron down icon" title="expand"></i>
				</div>
				<div class="sixteen wide computer column sixteen wide mobile column" v-else>
					{{ comments.length }} Comments <i class="ui chevron up icon" title="collapse"></i>
				</div>
				<br />
			</h3>
			<div v-if="comments.length > 0">
				<div class="comment" v-for="comment in comments">
					<a class="avatar">
						<img :src="comment.author.avatar" />
					</a>
					<div class="content">
						<router-link :to="{ name: 'ContributorProfile', params: { username: comment.author.name_slug } }">
							{{ comment.author.name }} <div class="ui tiny link label" v-if="author_id === comment.user_id">
								OWNER</div>
						</router-link>
						<div class="metadata">
							<span class="date">
								{{ comment.created_at }}
							</span>
						</div>
						<span style="float:right!important;cursor:pointer;" v-if="canDelete(comment.author.name_slug)">
							<i class="ui small trash icon"></i>
						</span>
						<div class="text">
							<div style="width:95%!important;">
								{{ comment.comment }}
							</div>
						</div>
						<br />
					</div>
				</div>
			</div>
			<div class="ui horizontal divider"></div>
			<form class="ui reply form">
				<div class="field">
					<input type="text" placeholder="add a comment here" v-model="new_comment" maxlength="120" />
				</div>
				<div class="ui tbb submit circular button" v-if="_isLoggedIn" @click="postComment()">
					Post Comment {{ resource_type }}
				</div>
				<div v-else>
					<small>
						<a href="/#/signin">
							Signin
						</a>
						to post comment.
					</small>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import store from '@/store';

export default {
	name: "Comments",
	props: {
		comments: Array,
		author_id: Number,
		resource_type: String,
		resource_id: Number,
		breadcrumb: String
	},
	computed: {
		_isLoggedIn() {
			let hasSession = (store.state.access_token !== null)
			this.isLoggedIn = hasSession

			return this.isLoggedIn
		}
	},
	data() {
		return {
			isCollapsed: true,
			isLoggedIn: false,
			new_comment: ""
		}
	},
	methods: {
		canDelete(commentAuthorSlug) {
			return this.isLoggedIn && (store.state.username === commentAuthorSlug);
		},
		postComment() {
			if (this.new_comment) {
				this.$store.dispatch('post_comment', {
					'commenting-as': this.$store.state.username,
					'resource-type': this.resource_type,
					'resource-id': this.resource_id,
					'comment': this.new_comment,
					'breadcrumb': this.breadcrumb
				})
			}
		}
	}
};
</script>

<style scoped>
.chevron {
	cursor: pointer !important;
}

.hidden {
	display: none !important;
}
</style>
