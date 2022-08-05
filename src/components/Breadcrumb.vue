<template>
    <div class="ui grid">
        <div
            class="sixteen wide computer column">
            <div class="ui header title">
                <div class="ui small breadcrumb">
                    <a class="section" href="/">back home</a>
                    <i class="left chevron icon divider"></i>
                    <div class="active section" v-if="activeLink === 'My Dashboard'">
                        public profile
                    </div>
                    <div class="active section" v-else>
                        <div v-if="isCookbookRoute()">
                            {{ active}}
                        </div>
                        <div v-else>
                            <router-link :to="{
                            name: parentComponentName,
                            params: { slug: parentSlug }
                        }">
                            {{ active }}
                        </router-link>
                        <i class="left chevron icon divider"></i> {{ child }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Breadcrumb",
    props: {
        active: String,
        parentSlug: String,
        parentComponentName: String,
        child: String
    },
    computed: {
        activeLink() {
            return this.active
        },
        isLoggedIn() {
            return (this.$store.state.access_token);
        }
    },
    methods: {
        isCookbookRoute() {
            return (this.$route.name === 'Cookbook')
        }
    }
};
</script>

<style scoped>
.title {
    text-transform: uppercase;
    font-weight: 300;
}
</style>