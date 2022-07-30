<template>
    <div class="ui grid">
        <div
            class="ten wide computer column ten wide mobile column ten wide tablet column ten wide large screen column">
            <div class="ui header title">
                <div class="ui small breadcrumb">
                    <a class="section" href="/">back home</a>
                    <i class="left chevron icon divider"></i>
                    <div class="active section" v-if="activeLink === 'My Dashboard'">
                        public profile
                    </div>
                    <div class="active section" v-else>
                        {{ activeLink }}
                    </div>
                </div>
            </div>
        </div>
        <div
            class="six wide computer column six wide mobile column six wide tablet column six wide large screen column">
            <div class="ui right floated medium tbb button" v-if="activeLink === 'My Dashboard'" :class="{ disabled: !isLoggedIn }">
                <i class="ui white bell icon"></i> Follow
            </div>
            <div class="ui right floated medium button" style="cursor:none!important;" v-else>
                <i class="ui white share icon"></i> 0 Shares
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: "Breadcrumb",
    props: {
        active: String
    },
    computed: {
        activeLink() {
            return this.active
        },
        isLoggedIn() {
			return (this.$store.state.access_token);
		}
    },
    data() {
        return {
            title: 'This is an Example component'
        }
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
.title {
    text-transform: uppercase;
    font-weight: 300;
}
</style>