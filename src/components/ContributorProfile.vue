<template>
<div>
    <Navigation />
    <div class="ui container">
        <div class="main-content">
            <div class="ui grid">
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
                                        authored: {{ contributions.cookbooks }} cookbooks and {{ contributions.recipes }} recipes
                                    </small>
                                    <br>
                                    <small>Member since: {{ user.created_at }}</small>
                                </div>
                                <p>{{ user.about }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="ui grid">
                        <div class="sixteen wide column" v-if="!user.contact.is_public">
                            <i class="lock icon"></i> Contact information (private mode)
                        </div>
                        <div class="sixteen wide column contact-labels" v-else>
                            <i class="unlock icon"></i> |
                            <span v-if="user.contact.facebook">
                                <a :href="user.contact.facebook">
                                    <i class="facebook black f icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact.twitter">
                                <a :href="user.contact.twitter">
                                    <i class="twitter black t icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact.instagram">
                                <a :href="user.contact.instagram">
                                    <i class="black instagram icon"></i>
                                </a>
                            </span>
                            <span v-if="user.contact.office_address">
                                <a>
                                    <i class="map marker icon"></i>
                                    {{ user.contact.office_address }}
                                </a>
                            </span>
                            <span v-if="user.contact.phone">
                                <a>
                                    <i class="black phone icon"></i>
                                    {{ user.contact.phone }}
                                </a>
                            </span>
                            <span v-if="user.contact.calendly">
                                <a>
                                    <i class="calendar icon"></i>
                                    {{ user.contact.calendly }}
                                </a>
                            </span>
                            <span v-if="user.contact.skype">
                                <a>
                                    <i class="skype black s icon"></i>
                                    {{ user.contact.skype }}
                                </a>
                            </span>
                            <span v-if="user.contact.website">
                                <a :href="user.contact.website">
                                    WEBSITE:
                                    {{ user.contact.website }}
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
        this.user = this.$store.getters['get_user'](
            this.$route.params.cookbookId,
            this.$route.params.recipeId,
			this.$route.params.username,
        );
        
        this.contributions.cookbooks = this.user.contributions.cookbooks
        this.contributions.recipes = this.user.contributions.recipes
    },
    data() {
        return {
            user: {},
            contributions: {
                cookbooks: 0,
                recipes: 0
            },
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
}
</style>