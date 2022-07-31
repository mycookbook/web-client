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
                                    Cookbooks {{ active_user.cookbooks }}
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
                                    Recipes {{ active_user.recipes }}
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
                                    Drafts 0
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
            <div class="ui disabled item">
                <div class="content">
                    <a href="">
                        <small>
                            <i class="ui bell icon"></i> Notifications
                        </small>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard'
                    }">
                        <div>
                            <small>
                                <i class="ui cogs icon"></i> Privacy Settings
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
    data() {
        return { }
    },
};
</script>

<style scoped></style>