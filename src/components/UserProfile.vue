/* eslint-disable import/no-unresolved */
<template>
<div class="ui container">
    <Navigation />
    <div class="ui panorama test ad" data-text="Panorama"></div>
    <div class="ui grid">
        <div class="ui twelve wide computer column sixteen wide mobile column">
            <div class="ui segment">
                <img class="ui small left floated image" src="https://www.simplyrecipes.com/wp-content/uploads/2019/11/newheadshot-1-300x300.jpg">
                <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, 
                    cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
                </p>
                <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum
                    referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
                </p>
                <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
                    Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
                    quas minimum postulant per id.
                </p>
            </div>
        </div>
        <div class="ui four wide computer column sixteen wide mobile column">
            <div class="ui medium rectangle test ad" data-text="Ad Unit 1"></div>
            <br />
            <div class="ui medium rectangle test ad" data-text="Ad Unit 2"></div>
        </div>
    </div>
    <Contact />
    <Bottom />
</div>
</template>

<script>
import Navigation from './Navigation.vue';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';

export default {
	name: 'UserProfile',
	data() {
		return {}
	},
	components: {
		Navigation,
		Contact,
		Bottom,
	},
};
</script>

<style scoped>
.container {
	margin-top:23vh;
}
</style>
