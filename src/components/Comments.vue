<template>
    <div>
        <Navigation />
        <div class="ui threaded comments">
            <h3 class="ui dividing header">
                <div class="sixteen wide computer column sixteen wide mobile column" v-if="isCollapsed">
                    12 Comments <i class="ui chevron up icon" title="expand"></i>
                </div>
                <div class="sixteen wide computer column sixteen wide mobile column" v-else>
                    12 Comments <i class="ui chevron down icon" title="collapse"></i>
                </div>
                <br />
            </h3>
            <div class="comment">
                <a class="avatar">
                    <img
                        src="data:image/jpeg;base64,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">
                </a>
                <div class="content">
                    <a class="author">Oswald Umeh</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        How artistic!
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
            </div>
            <div class="comment">
                <a class="avatar">
                    <img
                        src="https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1663804800&v=beta&t=YGH7N-WLLoAjVKM0KEOMZVcvf2_Mmt0XykriSyAsLVY">
                </a>
                <div class="content">
                    <a class="author">Elliot Fu</a>
                    <div class="metadata">
                        <span class="date">Yesterday at 12:30AM</span>
                    </div>
                    <div class="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
                <div class="comments">
                    <div class="comment">
                        <a class="avatar">
                            <img
                                src="data:image/jpeg;base64,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">
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
            <div class="comment">
                <a class="avatar">
                    <img
                        src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
                </a>
                <div class="content">
                    <a class="author">Elvis Diomande</a>
                    <div class="metadata">
                        <span class="date">5 days ago</span>
                    </div>
                    <div class="text">
                        Dude, this is awesome. Thanks so much -:)
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
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