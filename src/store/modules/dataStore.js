export const dataStore = {
    state: () => ({
        flags: [],
    }),
    mutations: {
        SET_FLAGS(state, flagsData){
            state.flags = flagsData;
        },
    },
    actions: {
        fetch_flags(context) {
            const flagsUrl = process.env.BASE_URL + "flags";

            this.state.api.client.get(
                flagsUrl,
                this.state.api.options,
            ).then(function(response) {
                context.commit("SET_FLAGS", response.data);
            }).catch(function(error){
                context.commit("HANDLE_ERROR", error);
            });
        },
    },
    getters: {
        get_flags: (state) => {
            return state.flags;
        }
    },
};
