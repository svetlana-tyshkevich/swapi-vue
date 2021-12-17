<template>
  <div>
    <ul>
      <li v-for="entity in entities" :key="entity.id">
        {{
          entity.name && entity.name.search(getSearchText) > -1
            ? entity.name
            : ''
        }}
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
    getSearchText() {
      const searchText = this.$store.getters.getInputText;
       console.log(searchText);
      return searchText;
    },
  },
};
</script>
