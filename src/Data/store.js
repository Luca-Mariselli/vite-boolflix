import {reactive} from 'vue';

const iMieiDati = reactive({
	myMovies: [],
	mySeries: [],
	apiPrefix: 'https://image.tmdb.org/t/p/w342/',
	showFilm: false,
	showSeries: false,
});

export default iMieiDati;