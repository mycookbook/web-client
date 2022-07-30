<template>
    <div>
        <div class="ui horizontal list">
            <div v-if="toFollowList && toFollowList.length > 0">
                <div class="item" v-for="toFollow in toFollowList">
                    <div class="ui grid">
                        <div class="four wide column">
                            <img class="ui mini circular image" :src="toFollow.avatar" :title="toFollow.author">
                        </div>
                        <div class="seven wide column" style="margin-left:-27px!important">
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
                        <div class="four wide column">
                            <div class="">
                                <div class="ui tbb small circular button" :class="{ disabled: !_isLoggedIn }"
                                    @click="follow()">
                                    Follow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="item">
                    <div class="ui grid">
                        <div class="four wide column"><img class="ui mini circular image" :src="avatar" :title="author">
                        </div>
                        <div class="seven wide column" style="margin-left:-27px!important">
                            <div>
                                <small>
                                    <b>
                                        <router-link :to="{ name: 'ContributorProfile', params: { username: handle } }">
                                            {{ author }}
                                        </router-link>
                                    </b>
                                </small>
                            </div>
                            <div>
                                <small>
                                    {{ followers }} followers
                                </small>
                            </div>
                        </div>
                        <div class="four wide column">
                            <div class="">
                                <div class="ui tbb small circular button" :class="{ disabled: !_isLoggedIn }"
                                    @click="follow()">
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
import Navigation from './Navigation.vue';

export default {
    name: "Follow",
    computed: {
        _profile() {
            return "/contributors/@" + this.handle
        },
        _isLoggedIn() {
            let hasSession = (store.state.access_token !== null)

            this.isLoggedIn = true

            if (!hasSession) {
                this.isLoggedIn = false
            }

            //if has session but not following this contributor
            //if has session and following this contributor
            //disabled btn and change text to following

            return this.isLoggedIn
        }
    },
    props: {
        followers: String,
        author: String,
        avatar: String,
        handle: String,
        toFollowList: Array
    },
    data() {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        follow() {
            let hasSession = this.$store.state.access_token

            if (!hasSession) {
                this.$router.push('/signin')
            }

            store.dispatch('followUser', {});
        }
    }
};
</script>