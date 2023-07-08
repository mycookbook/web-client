<template>
    <div>
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
                        <!-- <div>
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
                        </div> -->
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
                            This will return results for all recipes containing exact matches for one or more of the
                            given
                            ingredient names.
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
                            <a href="/#/search?q=:me|cookbooks ">Try it</a>
                        </span>
                        <div class="header">
                            :me|cookbooks
                        </div>
                        <ul class="list">
                            Example <code>:me|cookbooks </code>
                        </ul>
                        <br />
                        <div>
                            Note: This syntax only returns results if you are logged in.
                        </div>
                    </div>
                    <div class="ui message">
                        <span style="float: right!important;">
                            <a href="/#/search?q=:me|recipes ">Try it</a>
                        </span>
                        <div class="header">
                            :me|recipes
                        </div>
                        <ul class="list">
                            Example <code>:me|recipes</code>
                        </ul>
                        <br />
                        <div>
                            Note: This syntax only returns results if you are logged in.
                        </div>
                    </div>
                    <!-- <div class="ui message">
                        <div>
                            <p>
                                ======================================================
                            </p>
                            The following expressions are supported in the :me syntax:
                            <p>
                                ======================================================
                            </p>
                            <br />
                            <code>:me|cookbooks [all or part of cookbook name] e.g :me|cookbooks Vegan</code><br />
                            <p>
                                <span>
                                    returns all my cookbooks with names matching the given expression.
                                </span>
                                <span style="float:right!important;">
                                    <a href="/#/search?q=:me|cookbooks vegan">Try it</a>
                                </span>
                            </p>
                            <br />
                            <code>:me|recipes [all or part of recipe name] e.g :me|recipes cheesecake salad</code><br />
                            <p>
                                <span>
                                    returns all my recipes with names matching the given expression.
                                </span>
                                <span style="float:right!important;">
                                    <a href="/#/search?q=:me|recipes cheesecake salad">Try it</a>
                                </span>
                            </p>
                            <br />
                            <s>:me|recipes|likes</s><br />
                            <p class="ui warning message">
                                Sorry this expression is not available yet.
                            </p>
                        </div>
                    </div> -->
                </div>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
export default {
    name: "QuerySyntax"
};
</script>

<style scoped>

</style>