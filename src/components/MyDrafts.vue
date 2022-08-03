<template>
    <div>
        <div v-if="_myDrafts.length < 1">
            You have no drafts.
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
                        <div class="content">
                            <span>
                                <a class="header">
                                    <small>
                                        <em>{{ draft.contents.name }}</em> <i class="ui edit icon"></i>
                                    </small>
                                </a>
                            </span>
                            <span style="float:right!important;cursor:pointer!important;">
                                <i class="ui trash icon"></i>
                            </span>
                            <small>
                                {{ draft.contents.description | truncate(85, '...') }}
                            </small>
                        </div>
                        <br />
                        <div class="ui mini label">
                            <i class="ui clock icon"></i> {{ draft.created_at }}
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
            return this.$store.state.contributor.drafts
        }
    },
    props: {
        active_user: Object
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