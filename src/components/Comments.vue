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
                        <router-link :to="{ name: 'ContributorProfile', params: { username: comment.author.name_slug }}">
                             {{ comment.author.name }} <div class="ui tiny link label"
                                v-if="author_id === comment.user_id">OWNER</div>
                        </router-link>
                        <div class="metadata">
                            <span class="date">
                                {{ comment.created_at }}
                            </span>
                        </div>
                        <div class="text">
                            <p>
                                {{ comment.comment }}
                                <!-- <span class="ui icons reaction-icons">
                                    <i class="ui red heart icon"></i>
                                    <i class="ui tiny plus icon" style="margin-left:-8px;"></i>
                                </span> -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui horizontal divider"></div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui tbb submit disabled button">
                    Post Comment
                </div>
                <div>
                    <small>
                        You must be logged in to post a comment.
                    </small>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "Comments",
    props: {
        comments: Array,
        author_id: Number
    },
    data() {
        return {
            isCollapsed: true
        }
    }
};
</script>

<style scoped>
.chevron {
    cursor: pointer!important;
}

.hidden {
    display: none!important;
}

</style>