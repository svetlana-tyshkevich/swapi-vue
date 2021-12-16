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
          @click="onClick(film.properties.url)"
          class="nav-film"
        >
          {{ film.properties.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import DataService from '../services/DataService.js';

let films = ref(true);
let loading = ref({});

export default {
  name: 'Navigation',
  methods: {
    onClick(url) {
      this.$store.commit('setSelectedFilm', url);
    },
  },
  setup() {
    onMounted(() => getFilms());

    const getFilms = () => {
      DataService.getAllFilms()
        .then((res) => {
          films.value = res.data.result;
          loading.value = false;
        })
        .catch((e) => console.log(e));
    };
    return { films, loading };
  },
};
</script>

<style scoped>
.container {
  width: 30%;
  min-width: 200px;
  background-color: #000;
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
}
</style>
