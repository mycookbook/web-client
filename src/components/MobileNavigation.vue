<template>
    <div>
        <div class="ui top fixed menu grid mobile only" v-show="isToggleOn">
            <div class="sixteen wide computer column">
                <div class="ui grid">
                    <div class="ui sixteen wide white menu column" style="margin-top:6vh;">
                        <div v-if="isLoggedIn">
                            <a class="ui secondary menu item" @click="logOut()">
                                Logout
                            </a>
                        </div>
                        <div v-else>
                            <a class="ui secondary menu item" href="/#/signin">
                                Signin
                            </a>
                        </div>
                        <a class="ui secondary menu item">
                            <router-link :to="{ name: 'Dashboard' }">
                                My Dashboard
                            </router-link>
                        </a>
                        <a class="ui secondary menu item">
                            <router-link :to="{ name: 'Marketplace' }">
                                Marketplace
                            </router-link>
                        </a>
                        <a class="ui secondary menu item">
                            <router-link :to="{ name: 'UsagePolicy' }">
                                Terms & Conditions
                            </router-link>
                        </a>
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
        },
        logOut: function () {
            this.$store.dispatch('logout')
        }
    }
};
</script>
    
<style scoped></style>