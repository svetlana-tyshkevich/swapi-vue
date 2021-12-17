<template>
  <ul id="container">
    <li v-if="film.characters">
      <ul>
        <h3>Persons:</h3>
        <li v-for="person in film.characters" :key="person">
          <a :href="person" target="_blank">{{ getName(person) }}</a>
        </li>
      </ul>
    </li>
    <li v-if="film.starships">
      <ul>
        <h3>Starships:</h3>
        <li v-for="starship in film.starships" :key="starship">
          <a :href="starship" target="_blank">{{ getName(starship) }}</a>
        </li>
      </ul>
    </li>
    <li v-if="film.planets">
      <ul>
        <h3>Planets:</h3>
        <li v-for="planet in film.planets" :key="planet">
          <a :href="planet" target="_blank">{{ getName(planet) }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Links',
  data() {
    return {
      entities: this.$store.getters.getEntities,
      personInfo: { name: '', uid: '', url: '' },
    };
  },
  methods: {
    getName(entity) {
      const info = this.entities.find((item) => item.url === entity);
      if (info) return info.name;
    },
  },
  computed: {
    loading() {
      const loading = this.$store.getters.getLoading;
      return loading;
    },
    film() {
      const film = this.$store.getters.getSelectedFilm;
      return film.properties;
    },
  },
};
</script>

<style scoped>
#container {
  text-align: left;
  display: flex;
  justify-content: space-around;
}

li {
  padding: 5px 0;
}

a {
  text-decoration: none;
  color: #c5d9ec;
}
a:hover {
    color: #5a93e9;
}
</style>
