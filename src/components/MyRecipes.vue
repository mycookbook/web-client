<template>
    <div>
        <div class="hideshowicon">
            <div v-if="inEditMode">
                hide editor<i class="ui chevron down icon" @click="toggleEditor('hide')"></i>
            </div>
            <div v-else>
                show editor<i class="ui chevron up icon" @click="toggleEditor('show')"></i>
            </div>
        </div>
        <br />

        <div id="cookbook-editor">
            <div>
                <UploadImage :description="uploadMessageDescription" :imageDimensionMsg="imageDimensionMsg"
                    :acceptTypes="acceptTypes" />
            </div>
            <div class="ui horizontal divider"></div>
            <div class="ui form">
                <div class="field">
                    <label>Title (required*)</label>
                    <input type="text" placeholder="Enter title" />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>
                        <span>
                            How to prepare (required*)
                        </span>
                        <span style="float:right!important;">
                            <a href="/#/examples">
                                Examples
                            </a>
                        </span>
                    </label>
                    <textarea
                        placeholder="A very good description will be several characters long. A well described recipe keeps your readers engaged and want to come back for more. Make it count!"></textarea>
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>Ingredients (required*)</label>
                    <input type="text"
                        placeholder="Comma separated list of ingredients e.g 1/2 cup chilli pepper, 1/2 cup red onions" />
                    <br /><br />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>
                        Search Cookbook (required*)
                    </label>
                    <input type="text" placeholder="Enter ISO code e.g ca for Canada, us for USA, ng for Nigeria" />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>
                        <span>
                            Keywords (Optional)
                        </span>
                    </label>
                    <input type="text" placeholder="Keywords help your content get seen quickly in search results" />
                </div>
            </div>
            <div class="ui horizontal divider"></div>
            <div class="ui grid">
                <div class="six wide computer column sixteen wide mobile column">
                    <button class="fluid ui black outline button">save as draft</button>
                </div>
                <div class="ten wide computer column  sixteen wide mobile column">
                    <button class="fluid ui tbb button">save</button>
                </div>
            </div>
        </div>

        <div class="ui horizontal divider">
            <i class="camera icon"></i>
        </div>

        <div>
            <div v-if="_myRecipes.length < 1">
				<em>You have no recipes.</em>
			</div>
			<div v-else>
                <div class="ui items">
                    <div class="item" v-for="recipe in _myRecipes">
                        <div class="ui tiny image">
                            <img :src="recipe.imgUrl">
                        </div>
                        <div class="content">
                            <a class="header" href="">
                                <small>
                                    <span>
                                        <router-link :to="{ name: 'Recipe', params: { slug: recipe.slug } }">
                                            {{ recipe.name }}
                                        </router-link>
                                    </span>
                                </small>
                            </a>
                            <span style="float:right!important; font-size: 16px;">
                                <router-link :to="{ name: 'EditRecipe', params: { slug: recipe.slug } }">
                                    edit
                                </router-link>
                            </span>
                            <div class="meta">
                                <span>
                                    {{ recipe.summary | truncate(115, '...') }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UploadImage from './UploadImage.vue';

export default {
    name: "MyRecipes",
    mounted() {
        let username = this.$store.state.username
        this.$store.dispatch('fetch_contributor', username)
    },
    computed: {
        _categories() {
            let cs = this.$store.state.cookbookStore.definitions.categories.contents
            return JSON.parse(cs)
        },
        _myRecipes() {
            return this.$store.state.contributor.recipes
        }
    },
    data() {
        return {
            inEditMode: true,
            uploadMessageDescription: "Upload Recipe Cover Image",
            imageDimensionMsg: "Image dimension for best results (1127 x 650px)",
            acceptTypes: ".png"
        }
    },
    components: {
        UploadImage
    },
    methods: {
        toggleEditor(action) {
            if (action === 'hide') {
                $("#cookbook-editor").removeClass("show")
                $("#cookbook-editor").addClass("hide")
            }

            if (action === 'show') {
                $("#cookbook-editor").addClass("show")
                $("#cookbook-editor").removeClass("hide")
            }
            this.inEditMode = !this.inEditMode
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
};
</script>

<style scoped>
.hideshowicon i {
    cursor: pointer !important;
}

.show {
    display: inline;
}

.hide {
    display: none !important;
}
</style>