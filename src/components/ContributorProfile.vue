<template>
<div>
    <Navigation />
    <div class="ui container">
        <div class="main-content">
            <div v-if="isLoading">
                <RecipeCardSkeleton />
            </div>
            <div class="ui grid" v-else>
                <div class="thirteen wide computer column sixteen wide mobile column">
                    <div class="ui grid">
                        <div class="six wide computer column sixteen wide mobile column">
                            <img class="ui huge fluid image" :src="contributor.avatar">
                            <div style="margin-top:15px;">
                                <b>{{ contributor.name }}</b>
                            </div>
                            <div>
                                Authored {{ contributor.contributions.cookbooks }} 
                                <a :href="'/#/cookbooks/by/@' + contributor.name_slug">cookbooks</a> 
                                and {{ contributor.contributions.recipes }} 
                                <a :href="'/#/recipes/by/@' + contributor.name_slug">recipes</a>
                            </div>
                            <div>Member since: {{ contributor.created_at }}</div>
                            <div>
                                <i class="ui linkify icon"></i>
                                <a :href="'/#/contributors/@' + contributor.name_slug">@{{ contributor.name_slug }}</a> 
                                <div class="ui tiny link label">COPY LINK</div>
                            </div>
                        </div>
                        <div class="ten wide computer column sixteen wide mobile column">
                            <div class="ui grid">
                                <div :title="followTitleText" class="ui red button" style="float:right;">
                                    Subscribe
                                </div>
                            </div>
                            <div style="margin-top:8%;margin-bottom:8%;"></div>
                            <div class="tvn horizontal stroke"></div>
                            <div style="margin-top:3%;"></div>
                            <div>{{ contributor.about }}</div>
                            <div style="margin-top:8%;margin-bottom:8%;"></div>
                            <div class="ui bottom grid" v-if="contributor.contact_detail">
                                <div class="sixteen wide column" v-if="!contributor.contact_detail.is_public">
                                    <i class="lock icon"></i> Contact information (private mode)
                                </div>
                                <div class="sixteen wide column contact-labels" v-else>
                                    <i class="unlock icon"></i> |
                                    <span v-if="contributor.contact_detail.facebook">
                                        facebook:
                                        <a :href="contributor.contact_detail.facebook">
                                            <i class="facebook black f icon"></i>
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.twitter">
                                        twitter:
                                        <a :href="contributor.contact_detail.twitter">
                                            <i class="twitter black t icon"></i>
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.instagram">
                                        instagram:
                                        <a :href="contributor.contact_detail.instagram">
                                            <i class="black instagram icon"></i>
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.office_address">
                                        <i class="street view icon"></i>
                                        <a :href="getMapAddr(contributor.contact_detail.office_address)" target="_blank">
                                            {{ contributor.contact_detail.office_address }}
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.phone">
                                        phone:
                                        <a>
                                            <i class="black phone icon"></i>
                                            {{ contributor.contact_detail.phone }}
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.calendly">
                                        calendly:
                                        <a :href="contributor.contact_detail.calendly" target="_blank">
                                            <i class="calendar icon"></i>
                                            {{ contributor.contact_detail.calendly }}
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.skype">
                                        skype:
                                        <a :href="contributor.contact_detail.skype" target="_blank">
                                            <i class="skype black s icon"></i>
                                            {{ contributor.contact_detail.skype }}
                                        </a>
                                    </span>
                                    <span v-if="contributor.contact_detail.website">
                                        website:
                                        <a :href="contributor.contact_detail.website" target="_blank">
                                            {{ contributor.contact_detail.website }}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui grid">
                        <div class="sixteen wide column">
                            <div class="ui form">
                                <div class="field">
                                    <label>*Send a message/Give Feedback/Ask a question:</label>
                                    <textarea :placeholder="personalizedMsg()" disabled></textarea>
                                </div>
                                <div class="field">
                                    <label>*Your email:</label>
                                    <input type="email" placeholder="Add comma separated email addresses" disabled/>
                                </div>
                            </div>
                            <br />
                            <div class="ui small disabled button tbb">
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
                <div class="three wide computer column sixteen wide mobile column">
                    <div class="ui wide skyscraper test ad" data-text="Ad space"></div>
                </div>
                <Contact />
                <Bottom />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import RecipeCardSkeleton from './Skeletons/RecipeCardSkeleton.vue';

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
        },
        followTitleText() {
            return 'Follow ' + this.contributor.name + ' to learn about their new recipes.'
        }
    },
    methods: {
        getMapAddr: function($q) {
            return ' http://maps.google.com/?q=' + $q
        },
        personalizedMsg() {
            return "This ia a personalised message/question, it goes directly into " + this.contributor.name + "'s" + " email, so, make it count!";
        }
    },
    components: {
        RecipeCardSkeleton,
        Navigation,
        Contact,
        Bottom
    }
};
</script>

<style scoped>
.main-content {
    margin-top: 18vh;
}
.item h3 {
    text-transform: uppercase;
}
.bio {
    margin-top: -1vh;
    text-transform: capitalize;
    margin-bottom: 9px;
    font-weight: 700;
}
.contact-labels span {
    padding: 8px;
    font-weight: 500!important;
}

.contact-labels span  a{
    color: #171717!important;
}
</style>