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
        async fetchFlags(context) {
            const flagsUrl = process.env.BASE_URL + "flags";
            try {
                const response = await this.state.api.client.get(
                    flagsUrl,
                    this.state.api.options,
                );
                context.commit("SET_FLAGS", response.data);
            } catch (error) {
                console.error("Error fetching flags:", error);
            }
        },
    },
    getters: {
        getFlags: (state) => {
            return state.flags;
        }
    },
};
