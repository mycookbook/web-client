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
            <div class="ui segment">
                <UploadImage :description="uploadMessageDescription" :imageDimensionMsg="imageDimensionMsg"
                    :acceptTypes="acceptTypes" />
                <div class="ui horizontal divider">
                    Or
                </div>
                <div class="ui form">
                    <div class="field">
                        <label>stock photo image url</label>
                        <span style="float:right!important;">
                            <a href="https://www.dreamstime.com/stock-photos" target="_blank">
                                STOCK PHOTOS
                            </a>
                        </span>
                        <input type="text" v-model="imagePath" placeholder="Paste stock photo image address here" />
                    </div>
                </div>
            </div>
            <div class="ui horizontal divider"></div>
            <div class="ui form">
                <div class="field">
                    <label>Title (required*)</label>
                    <input type="text" v-model="title" placeholder="Enter recipe title" />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>Nationality (required*)</label>
                    <FlagPicker v-model="nationality" />
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
                    <vue-editor v-model="recipeDescription" :editorOptions="editorSettings" :editorToolbar="customToolbar"
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
                        </div>
                        <br />
                        <div class="ui grid">
                            <div class="six wide computer column  sixteen wide mobile column">
                                <label>enter preferred link</label>
                                <input v-model="input.thumbnail" type="text"
                                    placeholder="Enter your preferred thumbnail link" />
                            </div>
                            <div class="ten wide computer column  sixteen wide mobile column">
                                <label>thumbnail</label>
                                <button @click="getThumbnail(index, ingredients)" class="fluid ui red outline button">
                                    Quick select
                                </button>
                                <div class="ui flowing popup top left transition hidden">
                                    <div class="ui three column divided center aligned grid">
                                        <div v-for="item in thumbnailImages" class="column">
                                            <img class="imageContainer" :src="item.src.large" :alt="item.alt" />
                                            <div class="ui button" @click="onSelectImage(index, item.src.large)">Choose
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <br />
                    </div>
                </div>
            </div>
            <div class="ui form">
                <div class="field">
                    <label>
                        Search Cookbook (required*)
                    </label>
                    <input v-model="searchParameter" type="text" placeholder="e.g vegan cookbook" />
                </div>
            </div>
            <br />
            <div class="ui form">
                <div class="field">
                    <label>
                        <span>
                            Keywords (Optional)
                        </span>
                        <br />
                        <small>
                            Adding keywords is a great way to boost the visibility of your recipes
                        </small>
                    </label>
                    <input v-model="keywords" type="text" placeholder="e.g main dishes, fitfam" />
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
                            <span> How to prepare (required*) </span>
                            <span style="float: right !important">
                                <a href="/#/examples"> Examples </a>
                            </span>
                        </label>
                        <vue-editor v-model="recipeDescription" :editorOptions="editorSettings"
                            :editorToolbar="customToolbar"
                            placeholder="A very good description will be several characters long. A well described recipe keeps your readers engaged and want to come back for more. Make it count!" />
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
                                <div class="ten wide computer column sixteen wide mobile column">
                                    <label>thumbnail</label>
                                    <button @click="getThumbnail(index, ingredients)" class="fluid ui black outline button">
                                        select
                                    </button>
                                    <input v-model="input.thumbnail" type="text" placeholder="thumbnail" />
                                </div>

                                <!-- thumbnail modal -->
                                <div class="ui modal">
                                    <i class="close icon"></i>
                                    <div class="header">Suggested images</div>
                                    <div class="modalContent">
                                        Below are some suggested images for the thumbnail, you can
                                        select one or manually input link to one yourself
                                    </div>
                                    <div class="ui three column grid stackable divided">
                                        <div class="row">
                                            <ul style="
                                    display: grid;
                                    grid-template-columns: repeat(5, 1fr);
                                  ">
                                                <li v-for="item in thumbnailImages" style="width: 20%; display: inline"
                                                    @click="onSelectImage(item.src.large)">
                                                    <img class="imageContainer" :src="item.src.large" :alt="item.alt" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="modalContent">
                                        Don't like any of the images above? Enter the link to yours in
                                        previous page
                                    </div>
                                    <div class="actions">
                                        <div class="ui black deny button">Cancel</div>
                                        <div class="ui positive right labeled icon button">
                                            Done
                                            <i class="checkmark icon"></i>
                                        </div>
                                    </div>
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
                                    <button @click="addField(input, ingredients)" class="fluid ui black outline button">
                                        <i class="plus circle icon"></i>new item
                                    </button>
                                </div>
                                <div class="ten wide computer column sixteen wide mobile column">
                                    <button @click="removeField(index, ingredients)" class="fluid ui tbb button">
                                        <i class="minus circle icon"></i>remove item
                                    </button>
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
                        <label> Search Cookbook (required*) </label>
                        <input type="text" placeholder="Enter ISO code e.g ca for Canada, us for USA, ng for Nigeria" />
                    </div>
                </div>
                <br />
                <div class="ui form">
                    <div class="field">
                        <label>
                            <span> Keywords (Optional) </span>
                        </label>
                        <input type="text" placeholder="Keywords help your content get seen quickly in search results" />
                    </div>
                </div>
                <div class="ui horizontal divider"></div>
                <div class="ui grid">
                    <div class="six wide computer column sixteen wide mobile column">
                        <button class="fluid ui black outline button">save as draft</button>
                    </div>
                    <div class="ten wide computer column sixteen wide mobile column">
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
                                <img :src="recipe.imgUrl" />
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
                                <span style="float: right !important; font-size: 16px">
                                    <router-link :to="{ name: 'EditRecipe', params: { slug: recipe.slug } }">
                                        edit
                                    </router-link>
                                </span>
                                <div class="meta">
                                    <span>
                                        {{ recipe.summary | truncate(115, "...") }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UploadImage from "./UploadImage.vue";
import { VueEditor } from "vue2-editor";
import FlagPicker from './Widgets/FlagPickerWidget.vue'

export default {
    name: "MyRecipes",
    mounted() {
        let username = this.$store.state.username;
        this.$store.dispatch("fetch_contributor", username);
        this.$store.dispatch("reset_msgs");
    },
    computed: {
        _categories() {
            let cs = this.$store.state.cookbookStore.definitions.categories.contents;
            return JSON.parse(cs);
        },
        _myRecipes() {
            return this.$store.state.contributor.recipes;
        },
        editorSettings() {
            return { theme: "snow" };
        },
        thumbnailImages() {
            return this.$store.state.thumbnail;
        },
        editorSettings() {
            return { theme: "snow" };
        },
        thumbnailImages() {
            return this.$store.state.thumbnail;
        },
        getImagePath() {
            let imgPath = this.$store.state.imagePath;
            this.imagePath = imgPath;
        },
    },
    data() {
        return {
            inEditMode: true,
            uploadMessageDescription: "Upload Recipe Cover Image",
            imageDimensionMsg: "Image dimension for best results (1127 x 650px)",
            acceptTypes: ".png",
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
                ["clean"], // remove formatting button
            ],
            imagePath: "",
            title: "",
            nationality: "",
            recipeDescription: "",
            ingredients: [{ name: "", unit: "", thumbnail: "", link: "" }],
            searchParameter: "",
            keywords: "",
            //Errors
            error: []
        };
    },
    components: {
        UploadImage,
        VueEditor,
        FlagPicker,
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
            this.inEditMode = !this.inEditMode;
        },

        addField(value, field) {
            field.push({ value: { name: "", unit: "", thumbnail: "", link: "" } })
        },
        removeField(index, field) {
            if (index > 0) {
                field.splice(index, 1);
            }
        },

        async getThumbnail(index, field) {
            if (field[index].name) {
                console.log('Second log' + field[index].name)
                const ingredient = field[index].name;
                this.$store.dispatch("fetch_ingredient_thumbnail", ingredient);
                this.newPop();
            }
        },
        onSelectImage: function (index, imgLink) {
            this.ingredients[index].thumbnail = imgLink;
        },

        getNationality: function (country) {
            this.nationality = country
            console.log(this.nationality);
        },

        isvalid: function () {
            const isallowed = true;

            if (!this.imagePath) {
                this.error.push("Please upload an image")
                this.isallowed = false;
            }
            if (!this.title) {
                this.error.push("Please enter a title for your recipe")
                this.isallowed = false
            }
            if (!this.nationality) {
                this.error.push("Please enter the nationality of your recipe")
                this.isallowed = false;
            }
            if (!this.recipeDescription) {
                this.error.push("Please state how to prepare your recipe");
                this.isallowed = false;
            }
            if (!this.searchParameter) {
                this.error.push("Please enter a search parameter");
                this.isallowed = false;
            }
            return this.isallowed

        },
        newPop: function () {
            $('.button')
                .popup()
                ;
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
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";

.hideshowicon i {
    cursor: pointer !important;
}

.show {
    display: inline;
}

.hide {
    display: none !important;
}

.imageContainer {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 20px;
}


.modalContent {
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: 30px;
}

.singleOption:hover {
    transform: translate(0, 10);
}</style>
