<template>
  <div class="container">
    <h2>Films</h2>
    <div v-if="loading">
      <div class="loading"><img src="../assets/r2d2_icon.png" alt="loading"></div>
    </div>
    <div v-else>
      <ul>
        <li
          v-for="film in films"
          :key="film.id"
          v-bind:class="{ active: isActive }"
          @click="changeFilm(film)"
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
    },
  },
};
</script>

<style scoped>
.container {
  width: 27%;
  min-width: 300px;
  background-color: #333;
  padding: 20px 50px;
  border-radius: 8px;
  margin: 10px;
  min-height: 400px;
  position: relative;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

li {
  padding: 12px;
  margin: 0;
  font-size: 17px;
}

li:hover {
  background-color: #1b1b1b;
  cursor: pointer;
}

.loading {
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

}
img {
  animation: 4s infinite linear rotation;
}

@keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
</style>
