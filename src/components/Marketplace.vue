<template>
    <div class="ui container">
        <Navigation />
        <br /><br />
        <div class="ui grid">
            <div class="four wide computer column four wide tablet column mobile hidden">
                <LeftSideMenu />
            </div>
            <div class="twelve wide computer column twelve wide tablet column sixteen wide mobile column">
                <div class="ui header">
                    Welcome to Marketplace
                </div>
                <div>
                    Marketplace is a powerful AI platform that enables B2Bs, B2Cs and C2Cs to trade merchandise. Examples of merchandise
                    that can be traded are, recipes, transfer of private cookbook ownership, ecopy of cookbooks and many
                    more.
                </div>
                <br />
                <img class="mobile hidden"
                    src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?t=st=1684034125~exp=1684034725~hmac=fa39c37262995599f96f63c75d5954f362f321e9b3b7f61c972d03c887cf92ce" />
                <div>
                    In order to start trading, you need to login to your cookbooks account. <a href="/#/signin">Sign in
                    </a>to start trading immediately. <a href="/#/terms-and-conditions">Terms and conditions</a> apply. <br /> To
                    learn more, head on to our getting started guide.
                </div>
                <br />
                <div>
                    <button class="ui black button">
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