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

        <div id="recipe-editor">
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
                            <a href="/#/help?doc=templates">
                                see templates
                            </a>
                        </span>
                    </label>
                    <vue-editor v-model="recipeDescription" :editorOptions="editorSettings"
                        :editorToolbar="customToolbar"
                        placeholder="A very good description will be several characters long. A well detailed recipe keeps your followers engaged and keep coming back for more. Not sure how to start? Check out our sample templates." />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>Ingredients (required*)</label>
                    <div v-for="(input, index) in ingredients" :key="`ingInput-${index}`">
                        <div>
                            <label>name</label>
                            <input v-model="input.name" type="text" placeholder="name of ingredient" />
                        </div>
                        <br />
                        <div class="ui grid">
                            <div class="six wide computer column sixteen wide mobile column">
                                <label>unit</label>
                                <input v-model="input.unit" type="text" placeholder="unit" />
                            </div>
                            <br />
                            <div class="ten wide computer column  sixteen wide mobile column">
                                <label>thumbnail</label>
                                <input v-model="input.thumbnail" type="text" placeholder="thumbnail" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>link</label>
                            <input v-model="input.link" type="text" placeholder="Link" />
                        </div>
                        <br />
                        <div class="ui grid">
                            <div class="six wide computer column sixteen wide mobile column">
                                <button @click="addField(input, ingredients)" class="fluid ui black outline button"><i
                                        class="plus circle icon"></i>new
                                    item</button>
                            </div>
                            <div class="ten wide computer column  sixteen wide mobile column">
                                <button @click="removeField(index, ingredients)" class="fluid ui tbb button"><i
                                        class="minus circle icon"></i>remove
                                    item</button>
                            </div>
                        </div>
                        <div class="ui horizontal divider">
                            <i class="plus circe icon"></i>
                        </div>

                        <br /><br />
                    </div>
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
import { VueEditor } from "vue2-editor";

export default {
    name: "MyRecipes",
    mounted() {
        let username = this.$store.state.username
        this.$store.dispatch('fetch_contributor', username)
        this.$store.dispatch('reset_msgs')
    },
    computed: {
        _categories() {
            let cs = this.$store.state.cookbookStore.definitions.categories.contents
            return JSON.parse(cs)
        },
        _myRecipes() {
            return this.$store.state.contributor.recipes
        },
        editorSettings() {
            return { theme: 'snow' }
        }
    },
    data() {
        return {
            inEditMode: true,
            uploadMessageDescription: "Upload Recipe Cover Image",
            imageDimensionMsg: "Image dimension for best results (1127 x 650px)",
            acceptTypes: ".png",
            recipeDescription: "",
            ingredients: [{ name: "", unit: "", thumbnail: "", link: "" }],
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                ["clean"] // remove formatting button
            ]
        }
    },
    components: {
        UploadImage,
        VueEditor
    },
    methods: {
        toggleEditor(action) {
            if (action === 'hide') {
                $("#recipe-editor").removeClass("show")
                $("#recipe-editor").addClass("hide")
            }

            if (action === 'show') {
                $("#recipe-editor").addClass("show")
                $("#recipe-editor").removeClass("hide")
            }
            this.inEditMode = !this.inEditMode
        },
        addField(value, field) {
            field.push({ value: { name: "", unit: "", thumbnail: "", link: "" } })
        },
        removeField(index, field) {
            field.splice(index, 1);
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
@import "~vue2-editor/dist/vue2-editor.css";
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';

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