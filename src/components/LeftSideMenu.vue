<template>
    <div style="background-color:#F9f9f9;border-radius: 8px; width: 100%; height: auto;padding:12px;">
        <div class="ui list">
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'SearchResults'
                    }">
                        <div>
                            <small><i class="ui search icon"></i>Advanced Search</small>
                        </div>
                    </router-link>
                </div>
            </div>
            <br />
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Cookbooks' }
                    }">
                        <div>
                            <small>
                                <u>
                                    Cookbooks {{ _contributor.cookbooks.length }}
                                </u>
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Recipes' }
                    }">
                        <div>
                            <small>
                                <u>
                                    Recipes {{ _contributor.recipes.length }}
                                </u>
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Drafts' }
                    }">
                        <div>
                            <small>
                                <u>
                                    Drafts {{ _contributor.drafts.length }}
                                </u>
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <br />
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'SearchResults',
                        query: { q: 'all' }
                    }">
                        <div>
                            <small><i class="ui hashtag icon"></i> Explore</small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="ui item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Notifications' }
                    }">
                        <div>
                            <small><i class="ui bell icon"></i> Notifications 0</small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Privacy Settings' }
                    }">
                        <div>
                            <small>
                                <i class="ui cogs icon"></i> Privacy Settings
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Profile' }
                    }">
                        <div>
                            <small>
                                <i class="ui edit icon"></i> My Profile
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <br />
        <div>
            <div class="ui tbb tiny disabled button">
                Advertise With Us!
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftSideMenu",
    props: {
        active_user: Object
    },
    computed: {
        _contributor() {
            return this.$store.state.contributor
        }
    },
    data() {
        return { }
    },
};
</script>

<style scoped></style>