<template>
    <div>
        <div>
            <div>
                <p>
                    Using a template is a great way to help you quickly create a skeleton structure for your new recipe.
                    To see it on action, click on the try it button.
                </p>
                <div class="ui mini warning message" v-if="!isLoggedIn">
                    In order to use these templates, you need to <a href="/#/signin">signin</a>
                </div>
            </div>
            <br />
            <div>
                <div class="ui message">
                    <span style="float: right!important;">
                        <a href="/#/dashboard?tab=Recipes" class="ui tbb button">Try it</a>
                    </span>
                    <div class="header">
                        <em>Steps style with instructions</em>
                    </div>
                    <br />
                    <div>
                        <h4>Step 1</h4>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <h4>Step 2</h4>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <h4>Step 3</h4>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="ui message">
                    <span style="float: right!important;">
                        <a href="/#/dashboard?tab=Recipes" class="ui tbb button">Try it</a>
                    </span>
                    <div class="header">
                        <em>List style with instructions</em>
                    </div>
                    <br />
                    <div>
                        <h4>Using this method</h4>
                        <div>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li>
                                    Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </li>
                            </ul>
                        </div>
                        <h4>Using the other method</h4>
                        <div>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore et dolore magna aliqua.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li>
                                    Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    name: "Templates",
    computed: {
        isLoggedIn() {
            return (this.$store.state.access_token);
        }
    },
};
</script>