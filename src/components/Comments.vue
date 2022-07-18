<template>
    <div>
        <Navigation />
        <div class="ui threaded comments">
            <h3 class="ui dividing header">
                <div class="sixteen wide computer column sixteen wide mobile column" v-if="isCollapsed">
                    {{ comments.length }} Comments <i class="ui chevron up icon" title="expand"></i>
                </div>
                <div class="sixteen wide computer column sixteen wide mobile column" v-else>
                    {{ comments.length }} Comments <i class="ui chevron down icon" title="collapse"></i>
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui tbb submit disabled button">
                    Post Comment
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: "Comments",
    props: {
        comments: Array,
        author_id: Number
    },
    data() {
        return {
            title: 'This is an Example component',
            isCollapsed: true
        }
    },
    components: {
        Navigation
    }
};
</script>

<style scoped>
.example-class {
    color: #000000;
}
</style>