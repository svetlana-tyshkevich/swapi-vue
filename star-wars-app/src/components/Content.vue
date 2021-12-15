<template>
  <div id="container">
    <div v-if="loading">
      <div>loading</div>
    </div>
    <div v-else>
      <ul>
        <li>
          <span>Title: </span>
          <span>{{ film.title }}</span>
        </li>
        <li>
          <span>Episode: </span>
          <span>{{ film.episode_id }}</span>
        </li>
        <li>
          <span>Opening crawl: </span>
          <span>{{ film.opening_crawl }}</span>
        </li>
        <li>
          <span>Producer: </span>
          <span>{{ film.producer }}</span>
        </li>
        <li>
          <span>Director: </span>
          <span>{{ film.director }}</span>
        </li>
        <li>
          <span>Realise date: </span>
          <span>{{ film.release_date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataService from '../services/DataService.jsx';
import { onMounted, ref } from 'vue';

let film = ref(true);
let loading = ref({});

export default {
  name: 'Content',
  props: { page: String },

  setup(props) {
    onMounted(() => getFilm(props.page));

    const getFilm = (page) => {
      console.log(page);
      DataService.getFilm(page)
        .then((res) => {
          film.value = res.data.result.properties;
          loading.value = false;
        })
        .catch((e) => console.log(e));
    };
    return { film, loading };
  },
};
</script>

<style scoped>
#container {
    text-align: left;
}
ul {
    list-style: none;
padding: 20px 30px;
}
li {
    margin: 10px;
    padding: 5px;
}
span:nth-child(1) {
    color:#5a93e9;
    font-weight: 700;
}
</style>
