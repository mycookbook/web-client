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
                        query: { tab: 'Recipes' }
                    }">
                        <div>
                            <small>
                                <u>
                                    My Recipes {{ my_recipes ? my_recipes.length : 0 }}
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
                                    My Drafts {{ my_drafts ? my_drafts.length : 0 }}
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
                        query: { tab: 'Preferences' }
                    }">
                        <div>
                            <small>
                                <u>
                                    Preferences
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
                        name: 'Dashboard',
                        query: { tab: 'Profile' }
                    }">
                        <div>
                            <small>
                                <i class="ui picture icon"></i> My Profile
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="ui disabled item">
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
            <div class="disabled item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Privacy Settings' }
                    }">
                        <div>
                            <small>
                                <i class="ui lock icon"></i> Privacy Settings
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="disabled item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Display Settings' }
                    }">
                        <div>
                            <small>
                                <i class="ui puzzle icon"></i> Display Settings
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="disabled item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Redeem Points' }
                    }">
                        <div>
                            <small>
                                <i class="ui trophy icon"></i> Redeem My Points
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="disabled item">
                <div class="content">
                    <router-link :to="{
                        name: 'Dashboard',
                        query: { tab: 'Payments & Billing' }
                    }">
                        <div>
                            <small>
                                <i class="ui dollar sign icon"></i> Payments & Billing
                            </small>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <br />
        <div>
            <div class="ui circular teal disabled button">
                <a href="/#/contact-sales" style="color:white!important;">Advertise With Us</a>
            </div>
            <br /><br />
            <div class="ui tbb circular disabled button">
                <a href="/#/plans" style="color:white!important;">Upgrade Your Plan</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftSideMenu",
    computed: {
        my_recipes() {
            if (this.$store.state.hasOwnProperty('active_user')) {
                const recipes = this.$store.state.active_user.recipes
                if (recipes) {
                    return recipes.filter(function (recipe) {
                        return recipe.is_draft == false;
                    })    
                }
            } else {
                return []
            }
        },
        my_drafts() {
            if (this.$store.state.hasOwnProperty('active_user')) {
                const recipes = this.$store.state.active_user.recipes
                if (recipes) {
                    return recipes.filter(function (recipe) {
                        return recipe.is_draft == true;
                    })    
                }
            } else {
                return []
            }
        }
    },
};
</script>

<style scoped></style>