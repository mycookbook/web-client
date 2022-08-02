<template>
    <div>
        <div v-for="draft in active_user.drafts">
            <div class="ui list">
                <div class="item">
                    <div class="ui mini red label" v-if="draft.resource_type === 'cookbook'">
                        cookbook
                    </div>
                    <div class="ui mini purple label" v-if="draft.resource_type === 'recipe'">
                        recipe
                    </div>
                    <div class="ui mini orange label" v-if="draft.resource_type === 'variety'">
                        variety
                    </div>
                    <div class="massive content">
                        <a class="header">
                            <small>
                                {{ draft.contents.name }} <i class="ui edit icon"></i>
                            </small>
                        </a>
                        <small>
                            {{ draft.contents.description | truncate(85, '...') }}
                        </small>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: "MyDrafts",
    mounted() { },
    props: {
        active_user: Object
    },
    computed: {
        example() {
            return true
        }
    },
    data() {
        return {
            title: 'This is an Example component'
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
	},
    components: {
        Navigation
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}
</style>