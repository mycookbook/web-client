export const varietiesStore = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {
        get_varieties: (state) => (cookbookId, recipeId) => {
            const cookbooks = localStorage.getItem('cookbooks')
            const cookbook = JSON.parse(cookbooks).find(x => (x.id === parseInt(cookbookId)))
            const recipe = cookbook.recipes.find(y => (y.id === parseInt(recipeId)))

            return recipe.variations;
        }
    }
}
