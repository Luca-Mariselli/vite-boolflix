<script>
import axios from 'axios';
import store from '../Data/store.js';
export default {
    components: {

    },
    data() {
        return {
            store,
            myMovies: [],
            text: " ",
        }
    },
    methods: {
        // richiesta axios per cercare film
        cercaFilm() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: { query: this.text, include_adult: 'false', language: 'it-IT', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTU2MTY2Y2M5NmEzMWQ0MWYzZDE5ZDk1NGY4MDZlOCIsInN1YiI6IjY2NTc0OWVmNjYxYTlkNmU5ZWU0ZTczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7JG6XHgACkHP-dErkHmqWRxR0k7-zLrIsaWAjo7vmk'
                }

            };
            axios
                .request(options)
                .then(response => {
                    this.store.myMovies = response.data.results
                    console.log(this.store.myMovies)

                });
        },

        // richiesta axios per cercare serie
        cercaSerie() {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/tv',
                params: { query: this.text, include_adult: 'false', language: 'en-US', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTU2MTY2Y2M5NmEzMWQ0MWYzZDE5ZDk1NGY4MDZlOCIsInN1YiI6IjY2NTc0OWVmNjYxYTlkNmU5ZWU0ZTczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7JG6XHgACkHP-dErkHmqWRxR0k7-zLrIsaWAjo7vmk'
                }

            };
            axios
                .request(options)
                .then(response => {
                    this.store.mySeries = response.data.results
                    console.log(this.store.mySeries)

                });
        }
    },
    mounted() {
    }
}
</script>

<template>
    <header class="d-flex justify-content-around">
        <img src="../Data/img/504e88f1a30f968e13f4cdd854aab685.png" alt="">

        <div class="d-flex flex-column  justify-content-center">
            <div class="mb-2">Cerca film o serie TV:</div>
            <!-- cerca film e serie al riempimento -->
            <div><input v-model="text" type="input" @keyup="cercaFilm(), cercaSerie()" /></div>
        </div>

    </header>
</template>

<style scoped></style>
