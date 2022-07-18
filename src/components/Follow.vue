<template>
    <div>
        <div class="ui horizontal list">
            <div class="item">
                <img class="ui mini circular image" :src="avatar" :title="author">
                <div class="content">
                    <div>
                        <small>
                            <b>
                                <a class="ui link" :href="_profile">
                                    {{ author }}
                                </a>
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
                <div class="ui tbb small circular button">
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
        followers: Number,
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