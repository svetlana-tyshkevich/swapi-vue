<template>
  <div class="container">
    <h2>Films</h2>
    <div v-if="loading">
      <div>loading</div>
    </div>
    <div v-else>
      <ul>
        <li
          v-for="film in films"
          :key="film.id"
          @click="changeFilm(film)"
          class="nav-film"
        >
          {{ film.properties.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    changeFilm(film) {
      this.$store.dispatch('setSelectedFilm', film);
      this.$store.dispatch('setContentView', 'film');
    },
  },
  computed: {
    loading() {
      const loading = this.$store.getters.getLoading;
      return loading;
    },
    films() {
      const films = this.$store.getters.getNavigationList;
      return films;
    }
  }
};
</script>

<style scoped>
.container {
  width: 27%;
  min-width: 200px;
  background-color: #333;
  padding: 20px 0;
  border-radius: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 0;
}

li:hover {
  background-color: #1b1b1b;
  cursor: pointer;
}
</style>
