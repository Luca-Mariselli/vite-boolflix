<script>
import AppHeader from './components/AppHeader.vue';
import store from './Data/store.js';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
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

  <AppHeader />

  <AppMain />



</template>

<style scoped></style>
