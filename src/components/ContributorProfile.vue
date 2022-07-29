<template>
    <div class="ui container">
        <Navigation />
        <div v-if="isLoading">
            <RecipeCardSkeleton />
        </div>
        <div v-else>
            <br /><br /><br />
            <Breadcrumb :active="dashboard" />
            <div class="thirteen wide computer column sixteen wide mobile column">
                <div class="ui grid">
                    <div class="six wide computer column sixteen wide mobile column">
                        <img class="ui huge fluid image" :src="contributor.avatar">
                    </div>
                    <div class="ten wide computer column sixteen wide mobile column">

                        <div style="margin-top:8%;margin-bottom:8%;"></div>
                        <div>
                            <h2>Bio</h2>
                        </div>
                        <div style="margin-top:3%;"></div>
                        <div class="tvn horizontal stroke"></div>

                        <div style="margin-top:3%;"></div>

                        <div style="margin-top:15px;">
                            <b>{{ contributor.name }}</b> ({{ contributor.pronouns }})
                        </div>
                        <div>
                            Authored {{ contributor.contributions.cookbooks }}
                            <a :href="'#/search?q=' + contributor.name_slug">cookbooks</a>
                            and {{ contributor.contributions.recipes }}
                            <a :href="'#/search?q=' + contributor.name_slug">recipes</a>
                        </div>
                        <div>Member since: {{ contributor.created_at }}</div>
                        <div>
                            <i class="ui linkify icon"></i>
                            <a :href="'#/search?q=' + contributor.name_slug">@{{ contributor.name_slug }}</a>
                        </div>

                        <div style="margin-top:3%;"></div>

                        <div>{{ contributor.about }}</div>
                        <div style="margin-top:8%;margin-bottom:8%;"></div>

                        <div class="ui grid">
                            <div class="sixteen wide column">
                                <div class="ui form">
                                    <div class="field">
                                        <label>*Send a message/Give Feedback/Ask me a question:</label>
                                        <textarea :placeholder="personalizedMsg()"></textarea>
                                    </div>
                                    <div class="field">
                                        <label>*Your email:</label>
                                        <input type="email" placeholder="Add comma separated email addresses" />
                                    </div>
                                </div>
                                <br />
                                <div class="ui small button tbb">
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Bottom />
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';
import Breadcrumb from './Breadcrumb.vue';

export default {
    name: "ContributorProfile",
    mounted() {
        this.$store.dispatch('fetch_contributor', this.$route.params.username)
    },
    computed: {
        contributor() {
            return this.$store.state.contributor
        },
        isLoading() {
            return this.$store.state.resource_isLoading
        }
    },
    data() {
        return {
            dashboard: 'My Dashboard'
        }
    },
    methods: {
        getMapAddr: function ($q) {
            return ' http://maps.google.com/?q=' + $q
        },
        personalizedMsg() {
            return "This ia a personalised message/question, it goes directly into " + this.contributor.name + "'s" + " email, so, make it count!";
        }
    },
    components: {
        RecipeCardSkeleton,
        Navigation,
        Breadcrumb,
        Contact,
        Bottom
    }
};
</script>

<style scoped>
.container {
    margin-top: 23vh;
}
.contact-labels span {
    padding: 8px;
    font-weight: 500 !important;
}

.contact-labels span a {
    color: #171717 !important;
}
</style>