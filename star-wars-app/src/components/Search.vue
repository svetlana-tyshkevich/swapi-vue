<template>
  <div>
    <input
      type="search"
      name="search-field"
      id="search-field"
      v-model.lazy="inputValue"
      @change="changeInputValue"
      placeholder="type here"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  data() {
    return {
      inputValue: '',
    };
  },

  methods: {
    changeInputValue() {
      this.$store.dispatch('setInputText', this.inputValue.trim());
      if (this.inputValue.trim() === '') {
          this.$store.dispatch('setContentView', 'none');
      } else {
           this.$store.dispatch('setContentView', 'search');
      }
    },
  },
};
</script>
