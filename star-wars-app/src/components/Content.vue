<template>
  <div id="container">
    <div v-if="loading">
      <div class="loading"><img src="../assets/r2d2_icon.png" alt="loading"></div>
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
  font-size: 17px;
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
