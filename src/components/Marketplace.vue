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
                    Welcome to Marketplace (Coming soon)
                </div>
                <div>
                    List your business with us
                </div>
                <div>
                    <ul>
                        <li>personal chef</li>
                        <li>professinoal chef</li>
                        <li>party planner</li>
                        <li>event planner</li>
                        <li>wedding planner</li>
                        <li>online grocery store</li>
                    </ul>
                </div>
                <br />

                <div>
                    To get started, you need to login to your cookbooks account. <a href="/#/terms-and-conditions">Terms and
                        conditions</a> apply.
                    Learn more about how to best the best of this platform for your business.
                </div>
                <br />
                <div>
                    <button class="ui black disabled button">
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