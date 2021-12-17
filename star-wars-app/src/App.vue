<template>
  <div id="container">
    <Navigation />

    <div id="main">
      <Search />
      <!-- <Content :selected-film="getSelectedFilm" :key="getSelectedFilm" /> -->
      <SearchResult />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
// import Content from './components/Content.vue';
import Search from './components/Search.vue';
import SearchResult from './components/SearchResult.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    // Content,
    Search,
    SearchResult,
  },
  computed: {
    getSelectedFilm() {
      const selectedFilm = this.$store.getters.getSelectedFilm;
      console.log(selectedFilm);
      return selectedFilm;
    },
  },
  beforeMount() {
    this.$store.dispatch('getPersons');
    this.$store.dispatch('getFilms');
    this.$store.dispatch('getStarships');
    this.$store.dispatch('getPlanets');
  },
};
</script>

<style>
body {
  background-color: #444;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
ul {
  list-style: none;
  padding: 0;
}

#container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#main {
  width: 65%;
  background: #000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
}
</style>
