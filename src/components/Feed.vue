<template>
    <div class="ui container">
        <Navigation />
        <div class="ui grid">
            <div class="sixteen wide computer column sixteen wide mobile column">
                <div class="ui grid">
                    <div class="two wide computer column sixteen wide mobile hidden column"
                        style="background-color:#F9f9f9;border-radius: 8px; width: 100%; height: auto;">
                        <div>
                            <div class="ui list">
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'SearchResults'
                                        }">
                                            <div>
                                                <small><i class="ui search icon"></i>Adv. Search</small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <br />
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'Dashboard'
                                        }">
                                            <div>
                                                <small>
                                                    <u>
                                                        Cookbooks {{ active_user.cookbooks }}
                                                    </u>
                                                </small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'Dashboard'
                                        }">
                                            <div>
                                                <small>
                                                    <u>
                                                        Recipes {{ active_user.recipes }}
                                                    </u>
                                                </small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'Dashboard',
                                            params: {
                                                'tab': 'drafts'
                                            }
                                        }">
                                            <div>
                                                <small>
                                                    <u>
                                                        Drafts 0
                                                    </u>
                                                </small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <br />
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'SearchResults',
                                            query: { q: 'all' }
                                        }">
                                            <div>
                                                <small><i class="ui hashtag icon"></i> Explore</small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="ui disabled item">
                                    <div class="content">
                                        <a href="">
                                            <small>
                                                <i class="ui bell icon"></i> Notifications
                                            </small>
                                        </a>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="content">
                                        <router-link :to="{
                                            name: 'Dashboard'
                                        }">
                                            <div>
                                                <small>
                                                    <i class="ui cogs icon"></i> Privacy Settings
                                                </small>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div class="ui tbb tiny disabled button">
                                    Advertise With Us!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nine wide computer column sixteen wide mobile column">
                        <div class="ui feed">
                            <div class="event">
                                <div class="label">
                                    <img
                                        src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
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
                                    <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                                        <div class="date">
                                            4 days ago
                                        </div>
                                    </div>
                                    <div class="extra images">
                                        <a><img
                                                src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg"></a>
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
                                    <img
                                        src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
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
                                    <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
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
                                    <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
                                </div>
                                <div class="content">
                                    <div class="summary">
                                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                                        <div class="date">
                                            4 days ago
                                        </div>
                                    </div>
                                    <div class="extra images">
                                        <a><img
                                                src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E"></a>
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
                    <div class="five wide computer column sixteen wide mobile column">
                        <div class="ui grid">
                            <div class="sixteen wide computer column sixteen wide mobile column">
                                <img
                                    src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
                            </div>
                        </div>

                        <div class="ui grid">
                            <div class="sixteen wide computer column sixteen wide mobile column">
                                <WhoToFollowList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Follow from './Follow.vue';
import WhoToFollowList from './WhoToFollowList.vue';

export default {
    name: "Feed",
    computed: {
        active_user() {
            return this.$store.state.active_user
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
        Navigation,
        Follow,
        WhoToFollowList
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}
</style>