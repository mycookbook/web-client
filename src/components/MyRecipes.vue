<template>
<<<<<<< HEAD
=======
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
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submitButton)">
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
                <ValidationProvider rules="required" name="image url" v-slot="{ errors }">
                  <input type="text" v-model="imagePath" placeholder="Paste stock photo image address here" />
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
                <vue-editor v-model="recipeDescription" :editorOptions="editorSettings" :editorToolbar="customToolbar"
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
                    <ValidationProvider rules="required|alpha" name="ingredient name" v-slot="{ errors }">
                      <div>
                        <label>name</label>
                        <input v-model="input.name" type="text" placeholder="name of ingredient"
                          @input="searchIngredientImages(index)" />
                        <span class="errorText">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                    <br />
                    <div class="ui grid">
                      <ValidationProvider rules="required|integer" name="ingredient unit" v-slot="{ errors }">
                        <div class="six wide computer column sixteen wide mobile column">
                          <label>unit</label>
                          <input v-model="input.unit" type="text" placeholder="unit"
                            @input="searchIngredientImages(index)" />
                          <span class="errorText">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <br />
                    </div>
                    <br />
                    <br />
                    <div class="ui grid">
                      <div v-if="input.showImageResults" class="thumbnail-container">

                        <div v-for="(result, resultIndex) in input.imageResults" :key="`result-${resultIndex}`"
                          class="ingredient-image-result">
                          <label>
                            <input type="radio" :value="result" v-model="input.selectedThumbnail"
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
                        <input v-model="input.thumbnail" type="text" placeholder="Enter your preferred thumbnail link" />
                      </div>
                    </div>
                    <br />
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
            </div>
          </div>
          <div class="ui form">
            <div class="field">
              <label>
                Search Cookbook (required*)
              </label>
              <CookbookSelector @passCookbookCode="cookbook_id = $event" @click="clearError('cookbookError')" />
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
              <input v-model="keywords" type="text" placeholder="e.g main dishes, fitfam" />
            </div>
          </div>
          <div class="ui horizontal divider"></div>
          <div class="ui grid">
            <div class="six wide computer column sixteen wide mobile column">
              <button class="fluid ui black outline button">save as draft</button>
            </div>
            <div class="ten wide computer column  sixteen wide mobile column">
              <button class="fluid ui tbb button" type="submit">save</button>
            </div>
          </div>
        </div>
      </form>
    </ValidationObserver>

    <div class="ui horizontal divider">
      <i class="camera icon"></i>
    </div>

>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)
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
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitButton)">
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
                                        <ValidationProvider rules="required|alpha" name="ingredient name"
                                            v-slot="{ errors }">
                                            <div>
                                                <label>name</label>
                                                <input v-model="input.name" type="text" placeholder="name of ingredient" />
                                                <span class="errorText">{{ errors[0] }}</span>
                                            </div>
                                        </ValidationProvider>
                                        <br />
                                        <div class="ui grid">
                                            <ValidationProvider rules="required|integer" name="ingredient unit"
                                                v-slot="{ errors }">
                                                <div class="six wide computer column sixteen wide mobile column">
                                                    <label>unit</label>
                                                    <input v-model="input.unit" type="text" placeholder="unit" />
                                                    <span class="errorText">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <br />
                                        </div>
                                        <br />
                                        <div class="ui grid">
                                            <div class="six wide computer column  sixteen wide mobile column">
                                                <label>thumbnail link</label>
                                                <input v-model="input.thumbnail" type="text"
                                                    placeholder="Enter your preferred thumbnail link" />
                                            </div>
                                        </div>
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
                        </div>
                    </div>
                    <div class="ui form">
                        <div class="field">
                            <label>
                                Search Cookbook (required*)
                            </label>
                            <CookbookSelector @passCookbookCode="cookbook_id = $event"
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
                            <input v-model="keywords" type="text" placeholder="e.g main dishes, fitfam" />
                        </div>
                    </div>
                    <div class="ui horizontal divider"></div>
                    <div class="ui grid">
                        <div class="six wide computer column sixteen wide mobile column">
                            <button class="fluid ui black outline button">save as draft</button>
                        </div>
                        <div class="ten wide computer column  sixteen wide mobile column">
                            <button class="fluid ui tbb button" type="submit">save</button>
                        </div>
                    </div>
                </div>
            </form>
        </ValidationObserver>

        <div class="ui horizontal divider">
            <i class="camera icon"></i>
        </div>
    </div>
<<<<<<< HEAD
=======
  </div>
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)
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

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
})

export default {
    name: "MyRecipes",
    mounted() {
        let username = this.$store.state.username
        this.$store.dispatch('fetch_contributor', username)
        this.$store.dispatch('reset_msgs')
    },

<<<<<<< HEAD
    computed: {
        _categories() {
            let cs = this.$store.state.cookbookStore.definitions.categories.contents
            return JSON.parse(cs)
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

        _allCookbooks() {
            return this.$store.state.cookbooks
        },

        editorSettings() {
            return { theme: "snow" };
        },
        components: {
            UploadImage,
            VueEditor,
            FlagPicker,
        },
        getImagePath() {
            let imgPath = this.$store.state.imagePath;
            this.imagePath = imgPath;
        },

=======
    _allCookbooks() {
      return this.$store.state.cookbooks
      console.log()
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)
    },

    watch: {
        nationality(newValue, oldValue) {
            this.nationalityError = "";
        },
        cookbook_id(newValue, oldValue) {
            this.cookbookError = ""
        },
        deep: true,
        immediate: true
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

<<<<<<< HEAD
            imagePath: "",
            title: "",
            nationality: "",
            recipeDescription: "",
            ingredients: [{ name: "", unit: "", thumbnail: "", link: "" }],
            searchParameter: "",
            keywords: "",
            cookbook_id: "",
            draft: "false",
            //Errors
            error: [],
            cookbookError: "",
            nationalityError: "",
        };
    },
    components: {
        UploadImage,
        VueEditor,
        FlagPicker,
        ValidationProvider,
        ValidationObserver,
        CookbookSelector,
=======
  watch: {
    nationality(newValue, oldValue) {
      this.nationalityError = "";
    },
    cookbook_id(newValue, oldValue) {
      this.cookbookError = ""
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)
    },
    methods: {
        toggleEditor(action) {
            if (action === 'hide') {
                $("#recipe-editor").removeClass("show")
                $("#recipe-editor").addClass("hide")
            }

<<<<<<< HEAD
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
                const ingredient = field[index].name;
                this.$store.dispatch("fetch_ingredient_thumbnail", ingredient);
                this.newPop();
            }
        },
        onSelectImage: function (index, imgLink) {
            this.ingredients[index].thumbnail = imgLink;
        },
        newPop: function () {
            $('.button')
                .popup()
                ;
        },
=======


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
      cookbook_id: "",
      draft: "false",
      //Errors
      error: [],
      cookbookError: "",
      nationalityError: "",
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
    ...mapActions(['fetch_ingredient_thumbnail']), // Import the action from the store

    toggleEditor(action) {
      if (action === 'hide') {
        $("#recipe-editor").removeClass("show")
        $("#recipe-editor").addClass("hide")
      }
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)

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

<<<<<<< HEAD
        async submitButton() {
            const validFile = this.dropdownValidation()
            const dataSend =
            {
                title: this.title,
                nationality: this.nationality,
                ingredients: this.ingredients,
                keywords: this.keywords,
                draft: this.draft,
                recipeDescription: this.recipeDescription,
                imagePath: this.imagePath,
                cookbook_id: this.cookbook_id
            }
            if (validFile === true) {
                const result = await this.$store.dispatch('post_recipe', dataSend)
                console.log(result)
                if (result === 'success') {
                    alert("Recipe has been created")
                    this.toggleEditor('hide')
                } else {
                    alert('Problem creating recipe, please try again later')
                }
            }
            if (validFile === false) {
                alert('You have incomplete fields')
            }
        }
=======

    selectThumbnail(index, thumbnailUrl) {
      this.ingredients[index].thumbnail = thumbnailUrl.src.original;
    },

    async searchIngredientImages(index) {
      const ingredient = this.ingredients[index].name;
      const unit = this.ingredients[index].unit;
      // Check if both name and unit are filled before making the API call
      if (ingredient && unit) {
        // Remove the existing imageResults property
        this.$delete(this.ingredients[index], 'imageResults');

        // Make the API call to fetch the ingredient thumbnails
        await this.$store.dispatch('fetch_ingredient_thumbnail', ingredient);

        // Retrieve the image results from the store after the action is completed
        const response = this.$store.state.thumbnail;
        // Extract the thumbnail URLs from the API response
        const imageResults = response;
        // console.log(imageResults[index].url)


        // Update the corresponding ingredient object with the image results
        this.$set(this.ingredients[index], 'imageResults', imageResults);
        this.$set(this.ingredients[index], 'showImageResults', imageResults.length > 0);
      }
    },

    selectThumbnail(index, thumbnailUrl) {
      this.ingredients[index].thumbnail = thumbnailUrl;
    },


    newPop: function () {
      $('.button')
        .popup()
        ;
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

    async submitButton() {
      const validFile = this.dropdownValidation()
      const dataSend =
      {
        title: this.title,
        nationality: this.nationality,
        ingredients: this.ingredients,
        keywords: this.keywords,
        draft: this.draft,
        recipeDescription: this.recipeDescription,
        imagePath: this.imagePath,
        cookbook_id: this.cookbook_id
      }
      if (validFile === true) {
        const result = await this.$store.dispatch('post_recipe', dataSend)
        console.log(result)
        if (result === 'success') {
          alert("Recipe has been created")
          this.toggleEditor('hide')
        } else {
          alert('Problem creating recipe, please try again later')
        }
      }
      if (validFile === false) {
        alert('You have incomplete fields')
      }
    }
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)

    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }
}
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
<<<<<<< HEAD
    color: red;
    font-size: small;
    font-style: italic;
=======
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
>>>>>>> aa47291 (Adding the quick select option for the thumbnail for each ingredient)
}</style>
