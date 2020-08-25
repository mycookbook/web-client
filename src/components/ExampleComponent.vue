<template>
<div class="ui container">
    <Navigation />
    <div class="ui grid">
        -- contents here --
    </div>
    <Contact />
    <Bottom />
</div>
</template>

<script>
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
    name: "UserProfile",
    data() {
        return {}
    },
    components: {
		Navigation,
		Contact,
		Bottom
	},
};
</script>
