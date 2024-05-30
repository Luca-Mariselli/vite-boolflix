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
    <div class="col-3 p-2 mb-3">
        <!-- Titolo -->
        <div><span>Titolo:</span> {{ filmSingolo.title }}</div>
        <!-- Titolo originale -->
        <div><span>Titolo Originale:</span> {{ filmSingolo.original_title }}</div>

        <!-- Lingua -->
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

        <!-- Voto -->
        <div><span>Voto:</span>
            <span v-if="(filmSingolo.vote_average / 2).toFixed(2) >= 4.5">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </span>
            <span v-else-if="(filmSingolo.vote_average / 2).toFixed(2) >= 3.5">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
            </span>
            <span v-else-if="(filmSingolo.vote_average / 2).toFixed(2) >= 2.5">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
            </span>
            <span v-else-if="(filmSingolo.vote_average / 2).toFixed(2) >= 1.5">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
            </span>
            <span v-else-if="(filmSingolo.vote_average / 2).toFixed(2) >= 0.5">
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
            </span>
        </div>

        <!-- Immagine -->
        <img v-if="filmSingolo.backdrop_path != null" :src="store.apiPrefix + filmSingolo.backdrop_path" alt="">
        <img class="my-placeholder" v-else src="../Data/img/504e88f1a30f968e13f4cdd854aab685.png" alt="">
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
