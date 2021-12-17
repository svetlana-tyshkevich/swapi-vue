<template>
  <div>
    <ul>
      <li v-for="entity in entities" :key="entity.id">
        {{ entity.name && entity.name.search(getSearchext) > -1 ? entity.name : "" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data() {
    return {
      entities: this.$store.getters.getEntities,
    };
  },
  computed: {
      getSearchext() {
          const searchText = this.$store.getters.getInputText;
      return searchText;
      }
  }
};
</script>