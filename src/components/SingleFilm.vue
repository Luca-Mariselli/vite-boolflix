<script>
import store from '../Data/store.js';
export default {
    components: {

    },
    props: {
        filmSingolo: Object
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
    <div class="col-3 p-2 mb-2" v-for="filmSingolo in store.myMovies">
        <div><span>Titolo:</span> {{ filmSingolo.title }}</div>
        <div><span>Titolo Originale:</span> {{ filmSingolo.original_title }}</div>
        <div v-if="filmSingolo.original_language == 'en'">
            <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/us.svg" alt=""> /
            <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="">
        </div>
        <div v-else-if="filmSingolo.original_language == 'ja'">
            <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="">
        </div>
        <div v-else-if="filmSingolo.original_language == 'it'">
            <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="">
        </div>
        <div v-else>
            <span>Paese:</span> <img class="bandiera-w" src="../Data/img/International_Flag_of_Planet_Earth.svg" alt="">
        </div>
        <div><span>Voto:</span> {{ filmSingolo.vote_average }}</div>
    </div>
</template>

<style scoped>
.bandiera-w {
    width: 5%;
}

span {
    color: #fdb44b;
}
</style>
