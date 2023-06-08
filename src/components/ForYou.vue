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
        <div style="float:right">
            <select class="ui dropdown">
                <option value="0">sort alphabetically</option>
                <option value="1">filter by latest</option>
                <option value="0">filter by oldest</option>
                <option value="0">taking orders</option>
                <option value="0">shuffle</option>
            </select>
        </div>
        <br /><br /><br /><br />
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Trout, Sorrel Sauce, Trout Roe</h3>
                        <div class="description">
                            <small>
                                10+ people are talking about this <a href="/#/">recipe</a> already! Join in the
                                conversation,
                                see what's cooking!
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui red right ribbon label">
                    Trending now
                </a>
                <a href="/#/">
                    <img
                        src="https://images.unsplash.com/photo-1611564310694-09f3cf273450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80">
                </a>
            </div>
        </div>
        <br /><br />
        <div style="background-color: rgb(244, 244, 244); padding:15px!important;">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3>Grilled salmon steak</h3>
                        <div class="description">
                            <small>
                                Skip the queue and get the ingredients of this <a>recipe</a> shipped right to your door
                                steps in one easy step!
                            </small>
                            <br /><br />
                            <div class="ui tbb button"><i class="ui shopping cart icon"></i>Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui fluid image">
                <a class="ui red right ribbon label">
                    Taking Orders
                </a>
                <a href="/#/">
                    <img
                        src="https://images.unsplash.com/photo-1641898378716-1f38ec04bb0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80">
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