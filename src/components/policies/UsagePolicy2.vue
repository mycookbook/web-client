<template>
    <div>
        <Navigation />

        <div class="policyHeader" :style="{ backgroundImage: 'url(' + image + ')' }">
            <h1 class="policyHeader_text">Usage Policy</h1>
        </div>
        <div class="ui container" style="margin-top:10vh;">
            <div class="ui grid">
                <div class="sixteen wide column">

                    <div>
                        <span>This policy describes expected users' code of conduct either as an anonymous user or as a
                            contributor.
                            It also describes some key features and functionalities of the app and advises where user's
                            discretion
                            is required. By using this site, you have agreed to adhere to the </span>
                        <span><a href="/#/terms-and-conditions">Terms &amp; Conditions</a></span> <span>, Usage Policy and </span>
                        <span><a  href="/#/data-retention-policy">Data Retention Policy</a></span>

                        <span>. We retain the right to delete your contents, block your contributor account or take any
                            legal
                            actions as we deem fit upon any violation of any part of this policy.</span>
                    </div>

                    <br />

                    <p>
                        A contributor is a user that has to be authenticated before they can access the admin app. As a
                        contributor,
                        you are expected to only submit your original content. Copying contents you don't own from
                        another recipe
                        website is unacceptable and a complete violation of our code of conduct. You must strive to be
                        authentic
                        with your submissions. The more authentic you are, the better this site becomes, and more users
                        trust us. If
                        any of your contents is reported as a duplicate, inappropriate or stolen, on our part, we will
                        carry out an
                        investigation and send you an email. You have the right to defend your content. But if you are
                        found
                        wanting, the content may be deleted from our servers or any other action may be taken as we deem
                        fit. If
                        your contents get reported up to a total of 3 times throughout your lifecycle as a contributor
                        on this
                        platform, we will have to take appropriate actions as we deem fit. This may involve deleting
                        your account
                        permanently and barring you from using this platform in the future.
                    </p>
                    <br />
                    <div>
                        <span>As a contributor, other users might submit varieties to your recipes. These will be in a
                            pending state
                            and will not show up on the platform unless you approve them. You have a right to decide
                            which varieties
                            should be approved or not. When you decline a variety, it gets permanently deleted from our
                            servers.
                            However, regarding our </span>
                        <span><a href="/#/data-retention-policy"> data retention policy</a></span>
                        <span>, we have the right to keep your contributions on our servers as any submissions made to
                            this platform
                            is technically our property. You can request for your contents including your user account
                            to be
                            permanently deleted. Note that this request may take up to 90 days to take effect
                            fully.</span>
                    </div>
                    <br />

                    <p>An anonymous user is a user that does not have to be authenticated to search for any recipes on
                        this
                        platform. You also cannot access the admin app. If you wish to make a submission, hit the
                        register link to
                        create an account</p>
                    <br />
                    <p>
                        As an anonymous user, you have access to all the cookbooks, recipes and varieties on this
                        platform and you
                        can access them anonymously and for no fee atall. You have the right to submit varieties too
                        without the
                        need to be authenticated.
                    </p>

                    <h2 class="usageHeader1">Calorie counter</h2>
                    <p>
                        The calorie count for each recipe submitted is calculated using our internal calorie counter
                        tool. It takes into consideration the calorie count in each of the ingredients provided by the
                        author of the recipe and returns the sum/average. About 90% of the time this value will be true
                        however it is highly dependent on the ingredients provided by the author. It may not reflect the
                        true calorie count if:
                    </p>
                    <ul>
                        <li>
                            There was a spelling error in the name of the ingredient.
                        </li>
                        <li>
                            The ingredients list is incomplete.
                        </li>
                        <li>
                            The ingredients list is not a true reflection of what actually went into preparing the
                            recipe/variety.
                        </li>
                    </ul>

                    <p>
                        In these scenarios, user's discretion is advised. The CookbookHQ admin app provides a way to
                        help contributors provide accurate information regarding a submission they are making.
                    </p>

                    <h2 class="usageHeader2">Comparisons</h2>
                    <p>Recipe or varieties comparisons are only possible for recipes that belong to the same cookbook
                        and varieties that belong to the same recipe. Comparisons are based on the calories count of the
                        items being compared. This helps the user have a quick glance at the nutritional detail of
                        different recipes or varieties of a recipe. Again, user's discretion is advised.</p>

                    <h2 class="usageHeader3">Reporting</h2>
                    <div>
                        <span>You have the right to report a recipe that you deem inappropriate, stolen or a duplicate
                            by using the </span>
                        <span><a>report it </a></span>
                        <span>tool.</span>
                    </div>

                </div>
            </div>

            <Contact />
            <Bottom />
        </div>
    </div>
</template>


<script>
import Navigation from '../Navigation.vue'
import Contact from '../Contact.vue'
import Bottom from '../Bottom.vue'
import policyImage from '../../assets/img/policy.jpg';


export default {
    name: "UsagePolicy2",
    mounted(){
        window.scrollTo(0, 0);
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
    display: flex;
    align-items: center;
    margin-top: 150px;
    justify-content: center;

}

.policyHeader_text {
    font-size: 80px;
    color: #107DAC;
}
.usageHeader1{
    color: #2E8484;
}

.usageHeader2{
    color: #0e48a4;
}

.usageHeader3{
    color: #C73D3D;
}
</style>