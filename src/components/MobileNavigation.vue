<template>
    <div>
        <div class="ui top fixed menu grid mobile only" v-show="isToggleOn">
            <div class="sixteen wide computer column">
                <div class="ui grid">
                    <div class="ui sixteen wide white menu column" style="margin-top:6vh;">
                        <div v-if="isLoggedIn">
                            <a class="ui secondary menu item link" @click="logOut()">
                                Logout
                            </a>
                            <div v-if="routeName != 'Dashboard'">
                                <a class="ui secondary menu item">
                                    <router-link :to="{ name: 'Dashboard' }">
                                        My Dashboard
                                    </router-link>
                                </a>
                            </div>
                            <div v-else>
                                <a class="ui secondary menu item link" href="/#/dashboard?tab=Recipes">
                                    My Recipes
                                </a>
                                <a class="ui secondary menu item link" href="/#/dashboard?tab=Drafts">
                                    Drafts
                                </a>
                                <a class="ui secondary menu item link" href="/#/dashboard?tab=Preferences">
                                    Preferences
                                </a>
                                <a class="ui secondary menu item link" href="/#/help?doc=query-syntax">
                                    Help Docs
                                </a>
                            </div>
                        </div>
                        <div v-else>
                            <a class="ui secondary menu item link" href="/#/signin">
                                Login with TikTok
                            </a>
                        </div>
                        <div v-if="routeName == 'Help'">
                            <a class="ui secondary menu item link" href="/#/help?doc=query-syntax">
                                Search Query Syntax
                            </a>
                            <a class="ui secondary menu item link" href="/#/help?doc=templates">
                                Templates
                            </a>
                            <a class="ui secondary menu item link" href="/#/help?doc=faqs">
                                FAQs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui top fixed hidden menu mobile only">
            <div class="ui grid container">
                <div class="ui fourteen wide mobile column">
                    <a href="/">
                        <img src="/static/transparent_logo.png" class="ui centered image" alt="cookbookinc brand logo"
                            style="margin-top:-6%!important;margin-left:16%!important;">
                    </a>
                </div>
                <div class="ui two wide mobile column" id="hamburger-icon" @click="toggleMobileMenu()">
                    <i class="large bars icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "MobileNavigation",
    computed: {
        isRegistrationRoute() {
            return (this.$router.currentRoute.name == 'Register')
        },
        isLoggedIn() {
            return (this.$store.state.access_token);
        },
        routeName() {
            return this.$route.name
        }
    },
    data() {
        return {
            isToggleOn: false
        }
    },
    methods: {
        toggleMobileMenu: function () {
            this.isToggleOn = !this.isToggleOn
        }
    }
};
</script>
    
<style scoped>
.link {
    color: #4183C4 !important;
}
</style>