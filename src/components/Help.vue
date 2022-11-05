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
                    <h1>Help Docs (WIP)</h1>
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
                                    This will return results for all the cookbooks taged as vegan.
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
                                    This will return results for all the recipes found with vegan tag.
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
                                    <a href="/#/search?q=:cookbooks|country canada">Try it</a>
                                </span>
                                <div class="header">
                                    :cookbooks|country [country name e.g canada]
                                </div>
                                <ul class="list">
                                    Example <code>:tags|recipes canada</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the canadian recipes
                                </div>
                            </div>
                            <div class="ui message">
                                <span style="float: right!important;">
                                    <a href="/#/search?q=:cookbooks|category vegan">Try it</a>
                                </span>
                                <div class="header">
                                    :cookbooks|category [category name e.g vegan]
                                </div>
                                <ul class="list">
                                    Example <code>:cookbooks|category vegan</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the recipes found with 2022 tag.
                                </div>
                            </div>
                            <div class="ui message">
                                <div class="header">
                                    :cookbooks|author [author name]
                                </div>
                                <ul class="list">
                                    Example <code>:tags|recipes 2022</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the recipes found with 2022 tag.
                                </div>
                            </div>
                            <div class="ui message">
                                <div class="header">
                                    :cookbooks|private
                                </div>
                                <ul class="list">
                                    Example <code>:tags|recipes 2022</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the recipes found with 2022 tag.
                                </div>
                            </div>
                            <div class="ui message">
                                <div class="header">
                                    :cookbooks|public
                                </div>
                                <ul class="list">
                                    Example <code>:tags|recipes 2022</code>
                                </ul>
                                <br />
                                <div>
                                    This will return results for all the recipes found with 2022 tag.
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
                        <div>
                            <div>
                                <h3>:top syntax</h3>
                            </div>
                            <br />
                            <div>
                                <div class="ui message">
                                    <div class="header">
                                        :top|5
                                    </div>
                                    <ul class="list">
                                        Example <code>:top|5 cookbooks</code>
                                    </ul>
                                    <br />
                                    <div>
                                        Note: This syntax only returns results if you are logged in.
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div class="ui message">
                                    <div class="header">
                                        :top|5|location
                                    </div>
                                    <ul class="list">
                                        Example <code>:top|5|location cookbooks:canada</code>
                                    </ul>
                                    <br />
                                    <div>
                                        Note: This syntax only returns results if you are logged in.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="three wide computer column sixteen wide mobile column sixteen wide tablet column"
                style="border-right:solid #eeeeee 1px;">
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