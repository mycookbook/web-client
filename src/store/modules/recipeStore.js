import { data } from "jquery";
import { createClient } from "pexels";

export const recipeStore = {
  state: () => ({
    recipe: {},
    hasClapped: 0,
    maxAllowedClaps: 10,
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
  },
  actions: {
    addClap(context, payload) {
      let url = process.env.BASE_URL + "add-clap";

      this.state.api.client
        .post(
          url,
          {
            recipe_id: payload.recipeId,
          },
          this.state.api.options
        )
        .then(function (response) {
          if (response.data.updated) {
            context.commit("INCREMENT_CLAP", response.data.claps);
          }
        })
        .catch(function (error) {
          // console.log('clapping error', error.response)
        });
    },
    async fetch_recipe(context, recipeId) {
      context.commit("SET_LOADING_STATE", true);

      const uri = this.state.named_urls.recipe_resources + "/" + recipeId;

      await this.state.api.client
        .get(uri, this.state.api.options)
        .then(function (response) {
          response.data.ingredients = JSON.parse(response.data.ingredients);

          const parsedData = JSON.parse(response.data.nutritional_detail);
          const detail = {
            cal: parsedData.cal,
            carbs: parsedData.carbs,
            protein: parsedData.protein,
            fat: parsedData.fat,
          };
          response.data.nutritional_detail = detail;

          context.commit("UPDATE_RECIPE_STATE", response.data);
          context.commit("SET_LOADING_STATE", false);
        })
        .catch(function (error) {
          // console.log('fetch error', error)
          context.commit("SET_LOADING_STATE", false);
        });
    },
    reset_hasClapped(context) {
      context.commit("RESET_HASCLAPPED");
    },

    async post_recipe(context, payload) {
      let url = process.env.BASE_URL + "recipes";
      try {
        const response = await this.state.api.client.post(
          url,
          {
            cuisine: payload.title,
            description: payload.recipeDescription,
            imgUrl: payload.imagePath,
            ingredients: payload.ingredients,
            is_draft: payload.draft,
            name: payload.title,
            nationality: payload.nationality,
            summary: payload.keywords,
            cookbook_id: payload.cookbook_id,
            tags: payload.tags,
          },
          {
            headers: { Authorization: `Bearer ${process.env.DEV_TOKEN}` },
          }
        );

        if (response.status === 422) {
          // Handle the error
          const error = response.error;
         
          console.log(error);
          alert("There was an error creating the recipe");
        } else {
          return response;
        }
      } catch (error) {
        console.log(error);
        alert("There was an error creating the recipe");
      }
    },
  },
};
