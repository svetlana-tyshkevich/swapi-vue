<template>
  <div>
    <ul>
      <li v-for="entity in filteredEntities" :key="entity.id">
        {{ entity.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',

  computed: {
    getSearchText() {
      const searchText = this.$store.getters.getInputText.toLowerCase();
      console.log(searchText);
      return searchText;
    },

    filteredEntities() {
      const filteredEntities = this.$store.getters.getFilteredEntities;
      return filteredEntities;
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
  width: 50vw;
}

li {
  padding: 10px 30px;
}

li:nth-child(2n-1) {
  background-color: #fff1;
}
</style>
