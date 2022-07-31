<template>
    <div class="ui container">
        <Navigation />
        <div class="ui grid">
            <div class="sixteen wide computer column sixteen wide mobile column">
                <div class="ui grid">
                    <div class="two wide computer column sixteen wide mobile hidden column">
                        <LeftSideMenu :active_user="active_user" />
                    </div>
                    <div class="nine wide computer column sixteen wide mobile column">
                        Active dashboard tab
                    </div>
                    <div class="five wide computer column sixteen wide mobile column">
						<div class="ui grid">
                            <div class="sixteen wide computer column sixteen wide mobile column">
                                <img
                                    src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import LeftSideMenu from './LeftSideMenu.vue'

export default {
	name: "Dashboard",
	props: {
		numbers: Array
	},
	 computed: {
        active_user() {
            return this.$store.state.active_user
        }
    },
	components: {
		Navigation,
		LeftSideMenu
	}
};
</script>

<style scoped>
.container {
	margin-top: 23vh;
}
</style>