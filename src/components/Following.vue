<template>
    <div>
        <!-- {{ _datar }} -->
        <div style="margin-top:25px;" v-if="_datar">
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
                <Comments :comments="_d.comments" :author_id="_d.author.id" />
                <br /><br />
            </div>
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
        generateFlagClass: function (code) {
            let class_ = code + " flag";
            return class_;
        },
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