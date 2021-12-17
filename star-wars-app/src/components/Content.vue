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

export default {
  name: 'Content',
  computed: {
    loading() {
      const loading = this.$store.getters.getLoading;
      return loading;
    },
    film() {
      const film = this.$store.getters.getSelectedFilm;
      return film.properties;
    }
  }
 
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
  color: #5a93e9;
  font-weight: 700;
}
</style>
