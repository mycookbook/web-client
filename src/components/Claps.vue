<template>
    <div class="ui tbb fluid button" title="claps" @click="addClap()"
        :class="{ 'disabled': hasReachedMaximumAllowedThreshold }">
        <span>
            <i class="ui heart icon"></i> {{ totalCount | numberFormatter }}
        </span>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: "Claps",
    mounted() {
        this.$store.dispatch('reset_hasClapped')
    },
    computed: {
        totalCount() {
            return (this.$store.state.recipe.claps) || 0
        },
        hasReachedMaximumAllowedThreshold() {
            return (this.$store.state.recipeStore.hasClapped >= this.$store.state.recipeStore.maxAllowedClaps)
        }
    },
    methods: {
        addClap() {
            let id = this.$store.state.recipe.id

            const payload = { recipeId: id };

            store.dispatch('addClap', payload);
        }
    },
    filters: {
        numberFormatter(value) {
            return value
        }
    }
};
</script>
