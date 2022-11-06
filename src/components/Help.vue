<template>
    <div class="ui container">
        <Navigation />
        <div class="margin-top-150"></div>
        <div class="ui grid">
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div class="ui vertical menu">
                    <a class="item">
                        <h4 class="ui header">Advanced Search Query Syntax</h4>
                        <p>Learn the various types of query syntaxs</p>
                    </a>
                    <a class="item">
                        <h4 class="ui header">Contributing</h4>
                        <p>Check out our resources on how to be a contributor.</p>
                    </a>
                    <a class="item">
                        <h4 class="ui header">Community Guidelines</h4>
                        <p>Visit our forum for information on our community guidelines</p>
                    </a>
                </div>
            </div>
            <div class="ten wide computer column sixteen wide mobile column sixteen wide tablet column">
                <div style="padding:25px!important;">
                    <h1>Help Docs</h1>
                    <div>
                        <div>
                            <h3>:tags syntax</h3>
                        </div>
                        <br />
                        <div>
                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:tags|cookbooks vegan">Try it</a>
                                </span>
                                <div class="header">
                                    :tags|cookbooks
                                </div>
                                <ul class="list">
                                    Example <code>:tags|cookbooks vegan</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the cookbooks tagged as vegan.
                                </div>
                            </div>
                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:tags|recipes vegan">Try it</a>
                                </span>
                                <div class="header">
                                    :tags|recipes
                                </div>
                                <ul class="list">
                                    Example <code>:tags|recipes vegan</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the recipes tagged as vegan.
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div>
                            <h3>:cookbooks syntax</h3>
                        </div>
                        <br />
                        <div>
                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:cookbooks|categories vegan">Try it</a>
                                </span>
                                <div class="header">
                                    :cookbooks|category [category name e.g vegan]
                                </div>
                                <ul class="list">
                                    Example <code>:cookbooks|category vegan</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all cookbooks under the vagan category.
                                </div>
                            </div>

                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:cookbooks|recipes french toast">Try it</a>
                                </span>
                                <div class="header">
                                    :cookbooks|recipes [all or part of the recipe name]
                                </div>
                                <ul class="list">
                                    Example <code>:cookbooks|recipes french toast</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all cookbooks containing the given recipe name.
                                </div>
                            </div>

                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:cookbooks|author jane doe">Try it</a>
                                </span>
                                <div class="header">
                                    :cookbooks|author [all or part of the author's name]
                                </div>
                                <ul class="list">
                                    Example <code>:cookbooks|author jane doe</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all cookbooks created by this author or the cookbooks
                                    they have contributed to.
                                </div>
                            </div>

                        </div>
                        <br />
                        <div>
                            <div>
                                <h3>:recipes syntax</h3>
                            </div>
                            <br />
                            <div>
                                <div class="ui message">
                                    <span style="float: right!important;">
                                        <a href="/#/search?q=:recipes|author jane doe">Try it</a>
                                    </span>
                                    <div class="header">
                                        :recipes|author [all or part of author's name]
                                    </div>
                                    <ul class="list">
                                        Example <code>:recipes|author jane doe</code>
                                    </ul>
                                    <br />
                                    <div>
                                        This will return results for all recipes created by this author.
                                    </div>
                                </div>
                                <div class="ui message">
                                    <span style="float: right!important;">
                                        <a href="/#/search?q=:recipes|likes 0">Try it</a>
                                    </span>
                                    <div class="header">
                                        :recipes|likes [expression]
                                    </div>
                                    <ul class="list">
                                        Example <code>:recipes|likes 0</code>
                                    </ul>
                                    <br />
                                    <div>
                                        This will return results for all recipes with 0 likes.
                                        <br /><br />
                                        <p>=======================================================</p>
                                        <p>
                                            The following expressions are also supported in :recipes syntax
                                        </p>
                                        <p>=======================================================</p>
                                       
                                        <code>:recipes|likes gt|n e.g :recipes|likes gt|10</code><br />
                                        <p>
                                            <span>
                                                returns recipes with likes greater than 10
                                            </span>
                                            <span style="float:right!important;">
                                                <a href="/#/search?q=:recipes|likes gt|10">Try it</a>
                                            </span>
                                        </p>
                                        <br />
                                        <code>:recipes|likes lt|n e.g :recipes|likes lt|10</code><br />
                                        <p>
                                            <span>
                                                returns recipes with likes less than 10
                                            </span>
                                            <span style="float:right!important;">
                                                <a href="/#/search?q=:recipes|likes lt|10">Try it</a>
                                            </span>
                                        </p>
                                        <br />

                                        <code>:recipes|likes between:n|n e.g :recipes|likes between:10|1000</code><br />
                                        <p>
                                            <span>
                                                returns recipes with likes between 10 and 1000, lower and upper
                                                boundaries included.
                                            </span>
                                            <span style="float:right!important;">
                                                <a href="/#/search?q=:recipes|likes between:10|1000">Try it</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="ui message">
                                    <span style="float: right!important;">
                                        <a href="/#/search?q=:recipes|ingredients garlic powder,tumeric">Try it</a>
                                    </span>
                                    <div class="header">
                                        :recipes|ingredients [comma separated list of ingredient names]
                                    </div>
                                    <ul class="list">
                                        Example <code>:recipes|ingredients garlic powder,tumeric</code>
                                    </ul>
                                    <br />
                                    <div>
                                        This will return results for all recipes containing exact matches for one or more of the given ingredient names.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <div>
                                <h3>:me syntax</h3>
                            </div>
                            <br />
                            <div>
                                <div class="ui message">
                                    <span style="float: right!important;">
                                        <a href="/#/search?q=:cookbooks|country canada">Try it</a>
                                    </span>
                                    <div class="header">
                                        :me|cookbooks
                                    </div>
                                    <ul class="list">
                                        Example <code>:tags|cookbooks vegan</code>
                                    </ul>
                                    <br />
                                    <div>
                                        Note: This syntax only returns results if you are logged in.
                                    </div>
                                </div>
                                <div class="ui message">
                                    <span style="float: right!important;">
                                        <a href="/#/search?q=:cookbooks|country canada">Try it</a>
                                    </span>
                                    <div class="header">
                                        :me|recipes
                                    </div>
                                    <ul class="list">
                                        Example <code>:tags|recipes 2022</code>
                                    </ul>
                                    <br />
                                    <div>
                                        Note: This syntax only returns results if you are logged in.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"
                style="border-right:solid #eeeeee 1px;">
                <div class="ui info message">
                    <p>
                        <i class="ui warning red icon"></i>
                        Multi syntax is not currently supported. It means that you cannot combine multiple syntaxes
                        to get desired results. Multi syntax may be supported in a future release!
                    </p>
                </div>
                <img src="https://drdrew.com/wp-content/uploads/2017/08/ad-space-placeholder-300x250-300x250.png" />
            </div>
        </div>
    </div>
</template>
    
<script>
import Navigation from './Navigation.vue';

export default {
    name: "Help",
    components: {
        Navigation
    }
};
</script>
    
<style scoped>
.container {
    margin-top: 23vh;
}

.margin-top-150 {
    margin-top: 158px;
}
</style>