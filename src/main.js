import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {query: 'harry%20potter', include_adult: 'false', language: 'it-IT', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTU2MTY2Y2M5NmEzMWQ0MWYzZDE5ZDk1NGY4MDZlOCIsInN1YiI6IjY2NTc0OWVmNjYxYTlkNmU5ZWU0ZTczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7JG6XHgACkHP-dErkHmqWRxR0k7-zLrIsaWAjo7vmk'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
createApp(App).mount('#app')
