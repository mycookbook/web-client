<template>
    <div>
        <div style="margin-top:25px;" v-if="_datar">
            <div v-for="_d in _datar">
                <div class="ui grid">
                    <FourWideCircularImage :imgUrl="_d.author.avatar" :imgTitle="'recipe submmited by' + _d.name" />
                    <div class="twelve wide computer column">
                        <div class="content">
                            <div class="summary" style="margin-left:-23%!important;">
                                <a :href="'/#/contributors/' + _d.author.name_slug">
                                    {{ _d.author.name }}
                                </a> added a new recipe in
                                <a href="/#/search?q=:tags|recipes vegan">
                                    reddies patties
                                </a>
                                <span style="float:right!important;">Proudly <i class="jm flag" title="Jamaican"></i></span>
                                <div class="date">
                                    {{ _d.created_at }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="ui massive image">
                    <a :href="'/#/recipes/' + _d.slug" :title="_d.name">
                        <img :src="_d.imgUrl" alt="">
                    </a>
                </div>
                <br /><br />
                <Comments :comments="_d.comments" :author_id="_d.author.id" />
                <br /><br />
            </div>
        </div>
        <div v-else>
            <p>Your session may have expired. Try <a href="" @click="logOut()">signing</a> in again. otherwise, start
                following other contributors.</p>
        </div>
    </div>
</template>
    
<script>
import FourWideCircularImage from './FourWideCircularImage.vue'
import Comments from './Comments.vue'

export default {
    name: "Following",
    computed: {
        _datar() {
            return this.$store.state.following_data
        }
    },
    methods: {
        logOut: function () {
            this.$store.dispatch('logout')
        }
    },
    components: {
        FourWideCircularImage,
        Comments
    }
};
</script>
<style scoped>
.date {
    font-weight: bold !important;
    font-size: smaller !important;
}
</style>