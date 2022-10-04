<template>
    <div>
        <div>
            <div v-if="inEditMode">
                hide editor<i class="ui chevron up icon" @click="toggleEditor"></i>
            </div>
            <div v-else>
                add new recipe<i class="ui chevron down icon" @click="toggleEditor"></i>
            </div>
        </div>
        <br />
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitButton)" id="createRecipeForm">
                <div id="recipe-editor" v-if="inEditMode">
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
                                <ValidationProvider rules="required" name="image url" v-slot="{ errors }">
                                    <input type="text" v-model="imagePath"
                                        placeholder="Paste stock photo image address here" />
                                    <span class="errorText">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="ui horizontal divider"></div>
                    <div class="ui form">
                        <ValidationProvider rules="required" name="title" v-slot="{ errors }">
                            <div class="field">
                                <label>Title (required*)</label>
                                <input type="text" v-model="title" placeholder="Enter recipe title" />
                                <span class="errorText">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <br />
                    <div class="ui form">
                        <ValidationProvider :rules="{ required: true, min_words: { minWords: 50 } }" name="summary"
                            v-slot="{ errors }">
                            <div class="field">
                                <label>Recipe summary</label>
                                <textarea v-model="summary" type="text"
                                    placeholder="please provide short desciption of recipe, must contain at least 50 words" />
                                <span class="errorText">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>
                    <br />
                    <div class="ui form">
                        <div class="field">
                            <label>Nationality (required*)</label>
                            <FlagPicker @passNationalityCode="nationality = $event" />
                            <span class="errorText">{{ nationalityError }}</span>
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
                            <ValidationProvider rules="required" name="description" v-slot="{ errors }">
                                <vue-editor v-model="recipeDescription" :editorOptions="editorSettings"
                                    :editorToolbar="customToolbar"
                                    placeholder="A very good description will be several characters long. A well detailed recipe keeps your followers engaged and keep coming back for more. Not sure how to start? Check out our sample templates." />
                                <span class="errorText">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <br />
                    <div class="ui form">
                        <div class="field">
                            <label>Ingredients (required*)</label>
                            <div>
                                <div v-for="(input, index) in ingredients" :key="`ingInput-${index}`">
                                    <div>
                                        <ValidationProvider rules="required|alpha_spaces" name="ingredient name"
                                            v-slot="{ errors }">
                                            <div>
                                                <label>name</label>
                                                <input v-model="input.name" type="text" placeholder="name of ingredient"
                                                    @input="debounceSearchIngredientImages(index)" />
                                                <span class="errorText">{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                        <br />
                                        <div class="ui grid">
                                            <ValidationProvider rules="required|integer" name="ingredient unit"
                                                v-slot="{ errors }">
                                                <div class="six wide computer column sixteen wide mobile column">
                                                    <label>unit</label>
                                                    <input v-model="input.unit" type="text" placeholder="unit"
                                                        @input="debounceSearchIngredientImages(index)" />
                                                    <span class="errorText">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <br />
                                        </div>
                                        <br />
                                        <br />
                                        <div class="ui grid">
                                            <div v-if="input.loading" class="loading-indicator">Loading...</div>
                                            <div v-if="input.showImageResults" class="thumbnail-container">

                                                <div v-for="(result, resultIndex) in input.imageResults"
                                                    :key="`result-${resultIndex}`" class="ingredient-image-result">
                                                    <label>
                                                        <input type="radio" :value="result"
                                                            v-model="input.selectedThumbnail"
                                                            @change="selectThumbnail(index, input.selectedThumbnail.src.original)" />
                                                        <div class="thumbnail-wrapper">
                                                            <img :src="result.src.medium" class="thumbnail-image" />
                                                        </div>
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ui grid">
                                            <div class="six wide computer column sixteen wide mobile column">
                                                <label>thumbnail link</label>
                                                <input v-model="input.thumbnail" type="text"
                                                    placeholder="Enter your preferred thumbnail link" />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div class="ui grid">
                                            <div class="six wide computer column sixteen wide mobile column">
                                                <button @click="addField(input, ingredients)"
                                                    class="fluid ui black outline button"><i
                                                        class="plus circle icon"></i>new
                                                    item</button>
                                            </div>
                                            <div class="ten wide computer column  sixteen wide mobile column">
                                                <button @click="removeField(index, ingredients)"
                                                    class="fluid ui tbb button"><i class="minus circle icon"></i>remove
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
                                    <CookbookSelector ref="CookbookSelector" @passCookbookCode="cookbook_id = $event"
                                        @click="clearError('cookbookError')" />
                                    <span class="errorText">{{ cookbookError }}</span>
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
                                    <input type="text" placeholder="e.g main dishes, fitfam" />
                                </div>
                            </div>
                            <div class="ui horizontal divider"></div>
                            <div class="ui grid">
                                <div class="six wide computer column sixteen wide mobile column">
                                    <button class="fluid ui black outline button" @click="saveAsDraft">save as
                                        draft</button>
                                </div>
                                <div class="ten wide computer column sixteen wide mobile column">
                                    <button class="fluid ui tbb button" type="submit"
                                        v-bind:class="{ loading: submitLoading }">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </ValidationObserver>

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
                                <router-link :to="{
                                    name: 'Dashboard',
                                    query: { tab: 'EditRecipe', recipeId: recipe.id }
                                }">
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
        <div>
            <div class="toast visible" v-if="isCreated">
                <div class="toast-body">
                    Successfully created recipe.
                </div>
            </div>
            <div class="toast visible" v-if="hasErrorOnCreate">
                <div class="toast-body">
                    An error occured, please try again.
                </div>
            </div>
            <div class="toast visible" v-if="formHasIncompleteFields">
                <div class="toast-body">
                    You have incomplete fields.
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UploadImage from "./UploadImage.vue";
import { VueEditor } from "vue2-editor";
import FlagPicker from './Widgets/FlagPickerWidget.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import CookbookSelector from './Widgets/CookbookSelectorWidget';
import { mapActions } from 'vuex';
import { debounce } from 'lodash';
import { createClient } from 'pexels';

export default {
    name: "MyRecipes",
    mounted() {
        let username = this.$store.state.username

        this.$store.dispatch('fetch_contributor', username)
        this.$store.dispatch('fetch_active_user', username)
        this.$store.dispatch('reset_msgs')
        this.$store.dispatch(
            'reset_states',
            {
                'isCreated': false,
                'hasErrorOnCreateRecipe': false,
                'submitLoading': false
            }
        )
    },
    created() {
        Object.keys(rules).forEach(rule => {
            extend(rule, {
                ...rules[rule],
                message: messages[rule]
            });
        })

        extend('min_words', {
            params: ['minWords'],
            validate: (value, { minWords }) => {
                const words = value.trim().split(/\s+/).filter(word => word !== '');
                return words.length >= minWords;
            },
            message: 'Summary must contain at least {minWords} words'
        })
    },
    computed: {
        _categories() {
            let cs = this.$store.state.cookbookStore.definitions.categories.contents
            return JSON.parse(cs)
        },
        _myRecipes() {
            let recipes = this.$store.state.contributor.recipes
            return recipes.filter(function (recipe) {
                return recipe.is_draft == false;
            })
        },
        editorSettings() {
            return { theme: 'snow' }
        },
        isCreated() {
            // document.getElementById("createRecipeForm").reset();
            return this.$store.state.recipeStore.isCreated
        },
        hasErrorOnCreate() {
            return this.$store.state.recipeStore.hasErrorOnCreateRecipe
        },
        formHasIncompleteFields() {
            return this.$store.state.recipeStore.formHasIncompleteFields
        }
    },
    data() {
        return {
            inEditMode: false,
            uploadMessageDescription: "Upload Recipe Cover Image",
            imageDimensionMsg: "Image dimension for best results (1127 x 650px)",
            acceptTypes: ".png",
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ color: [] }, { background: [] }],
                ["clean"],
            ],
            imagePath: "",
            title: "",
            nationality: "",
            recipeDescription: "",
            ingredients: [{ name: "", unit: "", thumbnail: "", link: "", loading: false }],
            searchParameter: "",
            keywords: "",
            cookbook_id: "",
            submitLoading: this.$store.state.recipeStore.submitLoading,
            error: [],
            cookbookError: "",
            nationalityError: "",
            summary: "",
            debounceSearchIngredientImages: debounce(this.searchIngredientImages, 500),
        };
    },
    components: {
        UploadImage,
        VueEditor,
        FlagPicker,
        ValidationProvider,
        ValidationObserver,
        CookbookSelector,
    },

    methods: {
        toggleEditor() {
            this.inEditMode = !this.inEditMode;
        },

        addField(value, field) {
            field.push({ value: { name: "", unit: "", thumbnail: "", link: "" } })
            this.ingredients.forEach((ingredient, index) => {
                this.$delete(ingredient, 'imageResults');
                this.$delete(ingredient, 'showImageResults');
            });
        },
        removeField(index, field) {
            if (index > 0) {
                field.splice(index, 1);
            }
        },

        selectThumbnail(index, thumbnailUrl) {
            this.ingredients[index].thumbnail = thumbnailUrl.src.original;
        },

        async searchIngredientImages(index) {
            const ingredient = this.ingredients[index].name;
            const unit = this.ingredients[index].unit;

            this.$delete(this.ingredients[index], 'imageResults');
            this.$delete(this.ingredients[index], 'showImageResults');

            if (ingredient && unit) {
                try {
                    this.$set(this.ingredients[index], 'loading', true);

                    const response = await this.fetch_ingredient_thumbnail(ingredient)
                    const imageResults = response;
                    this.$set(this.ingredients[index], 'imageResults', imageResults);
                    this.$set(this.ingredients[index], 'showImageResults', imageResults.length > 0);
                } catch (error) {
                    console.log(error)
                } finally {
                    this.$set(this.ingredients[index], 'loading', false);
                }
            }
        },

        fetch_ingredient_thumbnail(ingredient) {
            const client = createClient(process.env.PEXEL_API_KEY);
            const query = ingredient;
            return new Promise((resolve, reject) => {
                client.photos.search({ query, per_page: 3 })
                    .then(photos => {
                        resolve(photos.photos)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },

        selectThumbnail(index, thumbnailUrl) {
            this.ingredients[index].thumbnail = thumbnailUrl;
        },
        dropdownValidation: function () {
            let isValid = true;
            if (!this.nationality) {
                this.nationalityError = "The nationality field is required"
                isValid = false;
            }
            if (!this.cookbook_id) {
                this.cookbookError = "The cookbook field is required";
                isValid = false
            }
            return isValid
        },
        buildDataSendAndSubmit(isDraft = false) {
            const dataSend = {
                title: this.title,
                nationality: this.nationality,
                ingredients: this.ingredients,
                keywords: this.keywords,
                recipeDescription: this.recipeDescription,
                recipeSummary: this.summary,
                imagePath: this.imagePath,
                cookbook_id: this.cookbook_id,
                tags: [],
                summary: this.summary,
            }

            if (isDraft === true) {
                dataSend['draft'] = "true"
            } else {
                dataSend['draft'] = "false"
            }

            this.submitRecipe(dataSend)
        },
        submitRecipe(dataSend) {
            const validFile = this.dropdownValidation()
            this.submitLoading = true

            if (validFile === true) {
                this.$store.dispatch('post_recipe', dataSend)
            } else {
                this.$store.dispatch('form_has_incomplete_fields')
            }
        },
        submitButton() {
            console.log
            this.buildDataSendAndSubmit(false)
        },
        saveAsDraft() {
            this.buildDataSendAndSubmit(true)
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

.errorText {
    color: red;
    font-size: small;
    font-style: italic;
}

.thumbnail-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 80px;
}

.thumbnail-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.thumbnail-wrapper {
    flex: 1;
}

.ingredient-image-result {
    margin-right: 10px;
    flex: 1;
}

.toast {
    position: fixed;
    bottom: 0;
    right: 0;

    transform: translateY(100%);
    opacity: 0;

    transition:
        opacity 500ms,
        transform 500ms;
}

.toast.visible {
    transform: translateY(0);
    opacity: 1;
}

.toast-body {
    margin: 28px;
    padding: 20px 24px;
    background-color: black;
    color: white;
    border-radius: 4px;
}
</style>