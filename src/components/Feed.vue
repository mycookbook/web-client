<template>
    <div class="ui container">
        <Navigation />
        <div class="ui grid">
            <div class="sixteen wide computer column sixteen wide mobile column">
                <div class="ui grid">
                    <div class="two wide computer column sixteen wide mobile hidden column">
                        sidebar
                        <div>
                            search, cookbooks, recipes link to dashboard, link to settings page, link to advertise with us
                        </div>
                    </div>
                    <div class="twelve wide computer column sixteen wide mobile column">
                        <div class="ui feed">
                            <div class="event">
                                <div class="label">
                                    <img src="/images/avatar/small/elliot.jpg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a class="user">
                                            Elliot Fu
                                        </a> added you as a friend
                                        <div class="date">
                                            1 Hour Ago
                                        </div>
                                    </div>
                                    <div class="meta">
                                        <a class="like">
                                            <i class="like icon"></i> 4 Likes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <img src="/images/avatar/small/helen.jpg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                                        <div class="date">
                                            4 days ago
                                        </div>
                                    </div>
                                    <div class="extra images">
                                        <a><img src="/images/wireframe/image.png"></a>
                                        <a><img src="/images/wireframe/image.png"></a>
                                    </div>
                                    <div class="meta">
                                        <a class="like">
                                            <i class="like icon"></i> 1 Like
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <img src="/images/avatar/small/jenny.jpg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a class="user">
                                            Jenny Hess
                                        </a> added you as a friend
                                        <div class="date">
                                            2 Days Ago
                                        </div>
                                    </div>
                                    <div class="meta">
                                        <a class="like">
                                            <i class="like icon"></i> 8 Likes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <img src="/images/avatar/small/joe.jpg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a>Joe Henderson</a> posted on his page
                                        <div class="date">
                                            3 days ago
                                        </div>
                                    </div>
                                    <div class="extra text">
                                        Ours is a life of constant reruns. We're always circling back to where we'd we
                                        started,
                                        then
                                        starting all over again. Even if we don't run extra laps that day, we surely
                                        will come
                                        back
                                        for more of the same another day soon.
                                    </div>
                                    <div class="meta">
                                        <a class="like">
                                            <i class="like icon"></i> 5 Likes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="label">
                                    <img src="/images/avatar/small/justen.jpg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                        <div class="date">
                                            4 days ago
                                        </div>
                                    </div>
                                    <div class="extra images">
                                        <a><img src="/images/wireframe/image.png"></a>
                                        <a><img src="/images/wireframe/image.png"></a>
                                    </div>
                                    <div class="meta">
                                        <a class="like">
                                            <i class="like icon"></i> 41 Likes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="two wide computer column sixteen wide mobile column">
                        this is an advertisement
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: "Feed",
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
        Navigation
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}
</style>