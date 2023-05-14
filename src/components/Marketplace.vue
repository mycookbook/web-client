<template>
    <div class="ui container">
        <Navigation />
        <br /><br />
        <div class="ui grid">
            <div class="four wide computer column">
                <LeftSideMenu />
            </div>
            <div class="twelve wide computer column">
                <div class="ui header">
                    Welcome to Marketplace
                </div>
                <div>
                    Marketplace provides a platform to trade merchandise for B2Bs, B2Cs and C2Cs. Examples of merchandize
                    that can be traded are, recipes, transfer of private cookbook ownership, ecopy of cookbooks and many
                    more.
                </div>
                <br />
                <img
                    src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?t=st=1684034125~exp=1684034725~hmac=fa39c37262995599f96f63c75d5954f362f321e9b3b7f61c972d03c887cf92ce" />
                <div>
                    In order to start trading, you need to login to your cookbooks account. <a href="/#/signin">Sign in now
                    </a>to start trading immediately. <a href="/#/terms-and-conditions">Terms and conditions</a> apply. To
                    learn more, head on to our getting started guide.
                </div>
                <br /><br />
                <div>
                    <button class="ui button tbb">
                        Getting started guide
                    </button>
                </div>
            </div>
        </div>
        <Contact />
        <Bottom />
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'
import LeftSideMenu from './LeftSideMenu.vue'

export default {
    name: "Marketplace",
    components: {
        Navigation,
        Contact,
        Bottom,
        LeftSideMenu
    }
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}
</style>