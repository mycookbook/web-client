<template>
    <div style="margin-top:25px;">
        <div class="ui list">
            <div class="item" style="background-color: rgb(244, 244, 244); padding:15px!important;">
                <div>
                    <i class="blue star icon"></i>
                    <i class="blue star icon"></i>
                    <i class="blue star icon"></i>
                    <i class="blue star icon"></i>
                    <i class="blue star icon"></i>
                    <br />
                </div>
                <div class="content">
                    <a class="header" style="color: black!important;">Trending this
                        week</a>
                    <div class="description">
                        <div>
                            <small>Check out this week's <a href="/#/search?q=:recipes|trending">top 10 trending
                                    recipes</a>. Finding your next favorite recipe is as easy
                                as the click of a button!
                            </small>
                        </div>
                        <div class="ui tbb tiny label" style="float: right;">
                            <i class="search icon"></i> start searching
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="ui divider"></div>
        <br />
        <div class="ui info centered message">
            <b>Hello there, we hope you are having the best experience! How likely are you to recommend
                this app to a friend?
                <br /><br />
                <div class="ui form">
                    <div class="inline fields">
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Still checking this out</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Probably</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio checkbox">
                                <input type="radio" name="fruit" tabindex="0" class="hidden">
                                <label>Very likely!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </b>
        </div>
        <br />
        <div class="ui divider"></div>
        <br />
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Fish Stew Pepper Soup</h3>
                        <div class="description">
                            <small>
                                6 people are talking about this <a href="/#/">recipe</a> already! Join in the conversation,
                                see what's cooking!
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui red right ribbon label">
                    Fresh in!
                </a>
                <a href="/#/">
                    <img src="https://thumbs.dreamstime.com/b/ethiopian-sampler-plate-18682633.jpg">
                </a>
            </div>
        </div>
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';

export default {
    name: "ForYou"
};
</script>