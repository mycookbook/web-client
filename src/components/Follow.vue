<template>
    <div>
        <div class="ui horizontal list">
            <div class="item">
                <img class="ui mini circular image" :src="avatar" :title="author">
                <div class="content">
                    <div>
                        <small>
                            <b>
                                <router-link :to="{ name: 'ContributorProfile', params: { username: handle }}">
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
            </div>
            <div class="item">
                <div class="ui tbb small circular button" :class="{ disabled: !_isLoggedIn }" @click="follow()">
                    Follow
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: "Follow",
    computed: {
        _profile() {
            return "/contributors/@" + this.handle
        },
        _isLoggedIn() {
            let hasSession = localStorage.getItem('access_token')

            this.isLoggedIn = true

            if (hasSession !== 'true') {
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
        handle: String
    },
    data() {
        return { 
            isLoggedIn: false
        }
    },
    methods: {
        follow() {
            let hasSession = localStorage.getItem('access_token')

            if (hasSession !== 'true') {
                this.$router.push('/register')
            }

            //grab token make request to:
            //follow endpoint
            //req params { contributor_id }
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