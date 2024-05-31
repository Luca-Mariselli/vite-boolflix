<script>
import store from '../Data/store.js';
export default {
    components: {

    },
    props: {
        filmSingolo: Object,
        indexFilm: Number
    },
    data() {
        return {
            store,
            isHovered: false
        }
    },
    methods: {
        filmCardShow() {
            this.isHovered = true
        },
        filmCardHide() {
            this.isHovered = false
        }

    },
    mounted() {
    }
}
</script>

<template>
    <div @mouseover="filmCardShow(indexFilm)" @mouseleave="filmCardHide(indexFilm)"
        class="colonna-custom mx-2 mb-5 position-relative">
        <div class="p-2" v-if="isHovered">
            <!-- Titolo -->
            <div class="d-flex mb-3 my-border">
                <span class="col-4">Titolo:</span>
                <div> {{ filmSingolo.title }}</div>
            </div>
            <!-- Titolo originale -->
            <div class="d-flex mb-3 my-border">
                <span class="col-4">Titolo Originale:</span>
                <div>{{ filmSingolo.original_title }}</div>
            </div>

            <div class="d-flex mb-3 my-border my-overflow">
                <span class="col-4">Descrizione:</span>
                <div> {{ filmSingolo.overview }}</div>
            </div>
            <!-- Lingua -->
            <div class="mb-3 my-border" v-if="filmSingolo.original_language == 'en'">
                <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/us.svg" alt=""> /
                <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="">
            </div>
            <div class="mb-3 my-border" v-else-if="filmSingolo.original_language == 'ja'">
                <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="">
            </div>
            <div class="mb-3 my-border" v-else-if="filmSingolo.original_language == 'it'">
                <span>Paese:</span> <img class="bandiera-w" src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="">
            </div>
            <div class="mb-3 my-border" v-else>
                <span>Paese:</span> <img class="bandiera-w" src="../Data/img/International_Flag_of_Planet_Earth.svg"
                    alt="">
            </div>

            <!-- Voto -->
            <div class="mb-3 my-border"><span>Voto:</span>
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
        </div>
        <!-- Immagine -->
        <div class="position-absolute top-50 start-50 translate-middle my-copertine">
            <img v-if="filmSingolo.backdrop_path != null" :src="store.apiPrefix + filmSingolo.poster_path" alt="">
            <div v-else class="div-ph-grandezza">
                <img class="my-placeholder" src="../Data/img/504e88f1a30f968e13f4cdd854aab685.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.bandiera-w {
    width: 5%;
}

span {
    color: #fdb44b;
    margin-right: 0.5rem;
}
</style>
