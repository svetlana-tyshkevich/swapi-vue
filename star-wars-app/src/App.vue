<template>
  <div id="container">
    <Navigation />

    <div id="main">
      <Search />
      <div v-if="getContentView === 'film'">
        <Content />
        <Links />
      </div>
      <div v-else-if="getContentView === 'search'">
        <SearchResult />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Content from './components/Content.vue';
import Search from './components/Search.vue';
import SearchResult from './components/SearchResult.vue';
import Links from './components/Links.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Content,
    Search,
    SearchResult,
    Links,
  },

  computed: {
    getSelectedFilm() {
      const selectedFilm = this.$store.getters.getSelectedFilm;
      return selectedFilm;
    },

    getContentView() {
      const contentView = this.$store.getters.getContentView;
      return contentView;
    },

    searchText() {
      const searchText = this.$store.getters.getInputText;
      return searchText;
    },
  },
  beforeCreate() {
    this.$store.dispatch('getPersons');
    this.$store.dispatch('getFilms');
    this.$store.dispatch('getStarships');
    this.$store.dispatch('getPlanets');
  },
};
</script>

<style>
body {
  background-color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

#container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#main {
  width: 65%;
  background: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px;
}
</style>
