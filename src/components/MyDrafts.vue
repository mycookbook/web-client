<template>
    <div>
        <div v-for="draft in active_user.drafts">
            <div class="ui list">
                <div class="item">
                    <div class="ui tiny red label" v-if="draft.resource_type === 'recipe'">
                        recipe
                    </div>
                    <div class="ui tiny purple label" v-else>
                        cookbook
                    </div>
                    <div class="content">
                        <a class="header">
                            {{ draft.contents.name }}
                        </a>
                        {{ draft.contents.description | truncate(85, '...') }}
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