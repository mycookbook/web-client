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
                <div class="ui tbb small circular disabled button">
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
    mounted() { },
    computed: {
        _profile() {
            return "/contributors/@" + this.handle
        }
    },
    props: {
        followers: String,
        author: String,
        avatar: String,
        handle: String
    },
    data() {
        return {}
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