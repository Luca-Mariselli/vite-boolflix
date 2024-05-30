<script>
import store from '../Data/store.js';
import SingleFilm from './SingleFilm.vue';
export default {
    components: {
        SingleFilm,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>

<template>

    <main>
        <div class="d-flex flex-wrap">
            <SingleFilm v-for="film in store.myMovies" :filmSingolo="film" />
        </div>
    </main>


</template>

<style scoped>
main {
    padding: 4rem;
}
</style>
