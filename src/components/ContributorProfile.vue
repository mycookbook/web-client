<template>
<div>
    <Navigation />
    <div class="ui container">
        <div class="main-content">
            <div class="ui grid">
                <div class="twelve wide computer column sixteen wide mobile column">
                    <div class="ui horizontal list">
                        <div class="item">
                            <h3>{{ user.name }}</h3>
                            <img class="ui massive image" :src="user.avatar">
                            <br /><br />
                            <div class="content">
                                <div class="ui sub right floated header">
                                    <div class="ui four wide computer column sixteen wide mobile column secondary menu">
                                        <div class="ui secondary menu flex-container">
                                            <a class="item" href="https://calendly.com/okosunuzflorence">
                                                <i class="calendar icon"></i>
                                            </a>
                                            <a class="item" title="https://twitter.com/florenceokosun">
                                                <i class="twitter t icon"></i>
                                            </a>
                                            <a class="item" title="+1 647 834 4290">
                                                <i class="phone icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {{ user.about }}
                                </div>
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
    },
    data() {
        return {
            user: {
                name: '',
                avatar: '',
                expertise_level: '',
                member_since: '',
                pronouns: ''
            }
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
</style>