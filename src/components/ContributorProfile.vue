<template>
<div>
    <Navigation />
    <div class="ui container">
        <div class="main-content">
            <div v-if="isLoading">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">Loading ...</div>
                </div>
                <p></p>
            </div>
            <div class="ui grid" v-else>
                <div class="twelve wide computer column sixteen wide mobile column">
                    <div class="ui segment">
                        <div class="ui grid">
                            <div class="eight wide computer column sixteen wide mobile column">
                                <img class="ui massive left floated image" :src="user.avatar">
                            </div>
                            <div class="eight wide computer column sixteen wide mobile column">
                                <span class="ui left floated">
                                    <h2>
                                        {{ user.name }} 
                                        <div class="ui star rating" data-rating="3"></div>
                                        <i class="us right floated flag"></i>
                                    </h2>
                                </span>
                                <br />
                                <div class="bio">
                                    <small>
                                        {{ user.expertise_level }}
                                    </small>
                                    <br>
                                    <small>
                                        authored: {{ user.contributions.cookbooks }} cookbooks and {{ user.contributions.recipes }} recipes
                                    </small>
                                    <br>
                                    <small>Member since: {{ user.created_at }}</small>
                                </div>
                                <p>{{ user.about }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="ui grid" v-if="user.contact_detail">
                        <div class="sixteen wide column" v-if="!user.contact_detail.is_public">
                            <i class="lock icon"></i> Contact information (private mode)
                        </div>
                        <div class="sixteen wide column contact-labels" v-else>
                            <i class="unlock icon"></i> |
                            <span v-if="user.contact_detail.facebook">
                                facebook:
                                <a :href="user.contact_detail.facebook">
                                    <i class="facebook black f icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact_detail.twitter">
                                twitter:
                                <a :href="user.contact_detail.twitter">
                                    <i class="twitter black t icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact_detail.instagram">
                                instagram:
                                <a :href="user.contact_detail.instagram">
                                    <i class="black instagram icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact_detail.office_address">
                                <i class="street view icon"></i>
                                <a :href="getMapAddr(user.contact_detail.office_address)" target="_blank">
                                    {{ user.contact_detail.office_address }}
                                </a>
                            </span>
                            <span v-if="user.contact_detail.phone">
                                phone:
                                <a>
                                    <i class="black phone icon"></i>
                                    {{ user.contact_detail.phone }}
                                </a>
                            </span>
                            <span v-if="user.contact_detail.calendly">
                                calendly:
                                <a :href="user.contact_detail.calendly" target="_blank">
                                    <i class="calendar icon"></i>
                                    {{ user.contact_detail.calendly }}
                                </a>
                            </span>
                            <span v-if="user.contact_detail.skype">
                                skype:
                                <a :href="user.contact_detail.skype" target="_blank">
                                    <i class="skype black s icon"></i>
                                    {{ user.contact_detail.skype }}
                                </a>
                            </span>
                            <span v-if="user.contact_detail.website">
                                website:
                                <a :href="user.contact_detail.website" target="_blank">
                                    {{ user.contact_detail.website }}
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="ui grid">
                        <div class="sixteen wide column">
                            <div class="ui form">
                                <div class="field">
                                    <label>Send a message/ask a question:</label>
                                    <textarea></textarea>
                                </div>
                            </div>
                            <br />
                            <div class="ui small button tbb">
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
                <div class="four wide computer column sixteen wide mobile column">
                    <div class="ui wide skyscraper test ad" data-text="Ad space"></div>
                </div>
            </div>
            <Contact />
            <Bottom />
        </div>
    </div>
</div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';

export default {
    name: "ContributorProfile",
    mounted() {
        if (localStorage.getItem("user_isReloaded") == 'true') {
			this.$store.dispatch('reload_global_resources', this.$route.params.cookbookId)
        }
    },
    created () {
		window.addEventListener('beforeunload', this.reload)
      },
      computed: {
          user() {
			return this.$store.getters['get_user'](
                this.$route.params.cookbookId,
                this.$route.params.recipeId,
                this.$route.params.username
			);
        },
        isLoading() {
			return this.$store.state.resource_isLoading
		},
      },
    data() {
        return {}
    },
    methods: {
        reload() {
			localStorage.setItem("user_isReloaded", true)
		},
        getMapAddr: function($q) {
            return ' http://maps.google.com/?q=' + $q
        }
    },
    components: {
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