<template>
    <div>
        <div style="margin-top:25px;" v-if="_datar.length > 0">
            <div v-for="_d in _datar">
                <div class="ui grid">
                    <FourWideCircularImage :imgUrl="_d.author.avatar" :imgTitle="'recipe submmited by' + _d.name" />
                    <div class="twelve wide computer column">
                        <div class="content">
                            <div class="summary" style="margin-left:-23%!important;">
                                <div class="ui grid">
                                    <div class="ui twelve wide computer column">
                                        <a :href="'/#/contributors/' + _d.author.name_slug">
                                            {{ _d.author.name }}
                                        </a> added this new recipe in
                                        <a :href="'/#/cookbooks/' + _d.cookbook_meta_data[0].slug">
                                            {{ _d.cookbook_meta_data[0].name }}
                                        </a>
                                    </div>
                                    <div class="ui four wide computer column">
                                        Proudly
                                        <i :class="generateFlagClass(_d.proudly.flag)" :title="_d.proudly.nationality"></i>
                                    </div>
                                </div>
                                <div class="date">
                                    {{ _d.submission_date }}
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
                <Comments :comments="_d.comments" :author_id="_d.author.id" :resource_type="_d.resource_type"
                    :resource_id="_d.id" :breadcrumb="'?v=ff'" />
                <br /><br />
            </div>
        </div>
        <div v-else>
            <RecipeCardSkeleton />
        </div>
    </div>
</template>
    
<script>
import FourWideCircularImage from './FourWideCircularImage.vue'
import Comments from './Comments.vue'
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';

export default {
    name: "Following",
    mounted() {
        this.$store.dispatch('fetch_following_data')
    },
    computed: {
        _datar() {
            return this.$store.state.following_data
        }
    },
    methods: {
        generateFlagClass: function (code) {
            let class_ = code + " flag";
            return class_;
        },
    },
    components: {
        FourWideCircularImage,
        RecipeCardSkeleton,
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