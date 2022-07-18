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
                        <img
                            src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
                    </a>
                    <div class="content">
                        <a class="author">Elliot Fu</a>
                        <div class="metadata">
                            <span class="date">Yesterday at 12:30AM</span>
                        </div>
                        <div class="text">
                            <p>
                                {{ comment.comment }}
                            </p>
                        </div>
                        <div class="actions">
                            <a class="reply">Reply</a>
                        </div>
                    </div>
                    <div class="comments">
                        <div class="comment">
                            <a class="avatar">
                                <img
                                    src="https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1663804800&v=beta&t=YGH7N-WLLoAjVKM0KEOMZVcvf2_Mmt0XykriSyAsLVY">
                            </a>
                            <div class="content">
                                <a class="author">Joy Ekhata</a>
                                <div class="metadata">
                                    <span class="date">Just now</span>
                                </div>
                                <div class="text">
                                    You are always so right :)
                                </div>
                                <div class="actions">
                                    <a class="reply">Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui tbb submit button">
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
        comments: Array
    },
    data() {
        return {
            title: 'This is an Example component',
            isCollapsed: true
        }
    },
    filters: {
        exampleFilter() { }
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