<template>

    <div>
        <Navigation />
        <div class="policyHeader" :style="{ backgroundImage: 'url(' + image + ')' }">
            <h1 class="dataHeader1">Terms and Conditions</h1>
        </div>

        <div class="ui container" style="margin-top:10vh;">
            <div class="ui grid">
                <div class="sixteen wide column">
                    <p>
                        By using our website, you have agreed to adhere to our Terms and Conditions, <a href="/#/usage-policy2">Usage Policy</a> and
                        <a href="/#/terms-and-conditions">Data Rentention Policy.</a>
                    </p>
                    <p>
                        Use the <a>report it</a> tool to report a content that is inappropriate, stolen or a duplicate.
                    </p>
                </div>
                <Contact />
                <Bottom />

            </div>
        </div>
    </div>
</template>

<script>

import Navigation from '../Navigation.vue'
import Contact from '../Contact.vue'
import Bottom from '../Bottom.vue'
import policyImage from '../../assets/img/terms.jpg';


export default {
    name: "TermsandConditions2",
    mounted() {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            image: policyImage
        }
    },
    components: {
        Navigation,
        Contact,
        Bottom
    }
}
</script>

<style>
.policyHeader {
    height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    margin-top: 150px;
    justify-content: center;

}

.dataHeader1 {
    font-size: 80px;
    color: #107DAC;
}


</style>