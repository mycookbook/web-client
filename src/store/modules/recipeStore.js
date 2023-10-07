export const recipeStore = {
    state: () => ({
        recipe: {},
        hasClapped: 0,
        maxAllowedClaps: 10,
        isCreated: false,
        hasErrorOnCreateRecipe: false,
        submitLoading: false,
        formHasIncompleteFields: false,
    }),
    mutations: {
        INCREMENT_CLAP(state, claps) {
            this.state.recipe.claps = claps;
            state.hasClapped += 1;
        },
        UPDATE_RECIPE_STATE(state, newState) {
            this.state.recipe = newState;
            state.hasClapped += 1;
        },
        RESET_HASCLAPPED(state) {
            state.hasClapped = 0;
        },
        HANDLE_SUCCESS(state, r) {
            state.isCreated = true
            state.hasErrorOnCreate = false
            state.submitLoading = false
            state.formHasIncompleteFields = false
        },
        HANDLE_FAILURE(state, r) {
            state.isCreated = false
            state.hasErrorOnCreate = true
            state.submitLoading = false
            state.formHasIncompleteFields = false
        },
        SET_FORM_HAS_INCOMPLETE_FIELDS(state) {
            state.formHasIncompleteFields = true
            state.submitLoading = false
        },
        HANDLE_RESET_STATES(state, statesToResetObj) {
            for (const key in statesToResetObj) {
                if (statesToResetObj.hasOwnProperty(key)) {
                    state[key] = statesToResetObj[key]
                }
            }
        }
    },
    actions: {
        addClap(context, payload) {
            let url = process.env.BASE_URL + "add-clap";

            this.state.api.client.post(
                url,
                {
                    recipe_id: payload.recipeId,
                },
                this.state.api.options,
            )
                .then(function (response) {
                    if (response.data.updated) {
                        context.commit("INCREMENT_CLAP", response.data.claps);
                    }
                })
                .catch(function (error) {
                    context.commit("HANDLE_ERROR", error.response);
                });
        },
        fetch_recipe(context, recipeId) {
            context.commit("SET_LOADING_STATE", true);

            const uri = this.state.named_urls.recipe_resources + "/" + recipeId;

            this.state.api.client.get(
                uri,
                this.state.api.options
            ).then(function (response) {
                response.data.ingredients = JSON.parse(
                    response.data.ingredients,
                );

                const parsedData = JSON.parse(
                    response.data.nutritional_detail,
                );
                const detail = {
                    cal: parsedData.cal,
                    carbs: parsedData.carbs,
                    protein: parsedData.protein,
                    fat: parsedData.fat,
                };
                response.data.nutritional_detail = detail;

                context.commit("UPDATE_RECIPE_STATE", response.data);
                context.commit("SET_LOADING_STATE", false);
            }).catch(function (error) {
                context.commit("SET_LOADING_STATE", false);
            }
            );
        },

        async fetch_recipe_raw(context, recipeId) {
            const uri = this.state.named_urls.recipe_resources + "/" + recipeId;
            try {
                const response = await this.state.api.client.get(uri, {
                    headers: {
                        Authorization: `Bearer ${process.env.DEV_TOKEN}`,
                    },
                });
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },

        reset_hasClapped(context) {
            context.commit("RESET_HASCLAPPED");
        },

        post_recipe(context, payload) {
            let url = process.env.BASE_URL + "recipes";

            this.state.api.client.post(
                url,
                {
                    cuisine: payload.title,
                    description: payload.recipeDescription,
                    summary: payload.recipeSummary,
                    imgUrl: payload.imagePath,
                    ingredients: payload.ingredients,
                    is_draft: payload.draft,
                    name: payload.title,
                    nationality: payload.nationality,
                    summary: payload.summary,
                    cookbook_id: payload.cookbook_id,
                    tags: payload.keywords,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.state.access_token}`,
                    },
                },
            ).then(function (response) {
                context.commit("HANDLE_SUCCESS", response);
            }).catch(function (error) {
                context.commit("HANDLE_FAILURE", error);
            })
        },

        update_recipe(context, payload) {
            const uri =
                process.env.BASE_URL +
                "recipes" +
                "/" +
                payload.recipeId +
                "/edit";

            return this.state.api.client
                .post(
                    uri,
                    {
                        cuisine: payload.title,
                        description: payload.recipeDescription,
                        imgUrl: payload.imagePath,
                        ingredients: payload.ingredients,
                        is_draft: payload.draft,
                        name: payload.title,
                        nationality: payload.nationality,
                        summary: payload.summary,
                        cookbook_id: payload.cookbook_id,
                        tags: payload.keywords,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.DEV_TOKEN}`,
                        },
                    },
                )
                .then((response) => {
                    if (response.status === 422) {
                        const error = response.error;

                        console.log(error);
                        alert("There was an error updating the recipe");
                    } else {
                        return response;
                    }
                })
                .catch((error) => {
                    alert("There was an error updating the recipe");
                });
        },
        reset_states(context, statesToReset) {
            context.commit("HANDLE_RESET_STATES", statesToReset);
        },
        form_has_incomplete_fields(context) {
            context.commit("SET_FORM_HAS_INCOMPLETE_FIELDS");
        }
    },
};