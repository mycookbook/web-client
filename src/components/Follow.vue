<template>
    <div>
        <div class="ui horizontal list">
            <div v-if="toFollowList && toFollowList.length > 0">
                <div class="item" v-for="toFollow in toFollowList">
                    <div class="ui grid">
                        <FourWideCircularImage :imgUrl="toFollow.avatar" :imgTitle="toFollow.author" />
                        <div class="eight wide computer column" style="margin-left:-27px!important;">
                            <div>
                                <small>
                                    <b>
                                        <router-link
                                            :to="{ name: 'ContributorProfile', params: { username: toFollow.handle } }">
                                            {{ toFollow.author }}
                                        </router-link>
                                    </b>
                                </small>
                            </div>
                            <div>
                                <small>
                                    {{ toFollow.followers }} followers
                                </small>
                            </div>
                        </div>
                        <div class="four wide computer column">
                            <div>
                                <div class="ui tbb small circular button" :class="{ disabled: !_isLoggedIn }"
                                    @click="follow(toFollow.handle)">
                                    Follow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import FourWideCircularImage from './FourWideCircularImage.vue'

export default {
    name: "Follow",
    computed: {
        _profile() {
            return "/contributors/@" + this.handle
        },
        _isLoggedIn() {
            let hasSession = (store.state.access_token !== null)
            this.isLoggedIn = hasSession

            return this.isLoggedIn
        }
    },
    props: {
        followers: String,
        author: String,
        avatar: String,
        toFollowList: Array
    },
    data() {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        follow(userHandle) {
            let hasSession = this.$store.state.access_token

            if (!hasSession) {
                this.$router.push('/signin')
            }

            store.dispatch('follow_user', { 'following': userHandle });
        }
    },
    components: {
        FourWideCircularImage
    }
};
</script>
