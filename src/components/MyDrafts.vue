<template>
    <div>
        <div v-if="_myDrafts.length < 1">
            <em>You have no drafts.</em>
        </div>
        <div v-else>
            <div v-for="draft in _myDrafts">
                <div class="ui list">
                    <div class="item">
                        <div class="ui mini red label" v-if="draft.resource_type === 'cookbook'">
                            cookbook
                        </div>
                        <div class="ui mini purple label" v-if="draft.resource_type === 'recipe'">
                            recipe
                        </div>
                        <div class="ui mini orange label" v-if="draft.resource_type === 'variety'">
                            recipe variety
                        </div>
                        <div class="ui mini label">
                            <i class="ui clock icon"></i> {{ draft.created_at }}
                        </div>
                        <span style="float:right!important;cursor:pointer!important;">
                            <i class="ui edit icon"></i>
                            <i class="ui trash icon"></i>
                        </span>
                        <br /><br />
                        <div class="ui large fluid image" v-if="draft.bookCoverImg">
                            <img :src="draft.bookCoverImg" />
                        </div>
                        <div class="ui large fluid image" v-if="draft.imgUrl">
                            <img :src="draft.imgUrl" />
                        </div>
                        <br />
                        <div class="content">
                            <span>
                                <a class="header">
                                    <small>
                                        <em>{{ draft.name }}</em>
                                    </small>
                                </a>
                            </span>
                            <div v-html="draft.description"></div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyDrafts",
    mounted() {
        window.scrollTo(0, 0);
    },
    computed: {
        _myDrafts() {
            let recipes = this.$store.state.contributor.recipes
            let cookbooks = this.$store.state.contributor.cookbooks

            let _recipes = recipes.filter(function (recipe) {
                return recipe.is_draft == true;
            })

            let _cookbooks = cookbooks.filter(function (cookbook) {
                return cookbook.is_draft == true;
            })
            
            return _recipes.concat(_cookbooks)
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }
};
</script>

<style scoped>

</style>