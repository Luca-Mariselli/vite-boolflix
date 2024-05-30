<script>
import store from '../Data/store.js';
import SingleFilm from './SingleFilm.vue';
import SingleSeries from './SingleSeries.vue';
export default {
    components: {
        SingleFilm,
        SingleSeries
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
        <div class="trovati">Film:</div>
        <div class="d-flex flex-wrap">
            <SingleFilm v-for="film in store.myMovies" :filmSingolo="film" />
        </div>

        <div class="trovati">Serie TV:</div>
        <div class="d-flex flex-wrap">
            <SingleSeries v-for="serie in store.mySeries" :serieSingola="serie" />
        </div>

    </main>


</template>

<style scoped>
main {
    padding: 4rem;
}

.trovati {
    font-size: 30px;
    background-color: rgba(255, 0, 0, 0.25);
    border-radius: 35px;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>
