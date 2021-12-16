import { createStore } from 'vuex';

export const store = createStore({
  state: {
    selectedFilm: 'https://www.swapi.tech/api/films/1',
  },
  getters: {
    getSelectedFilm(state) {
      return state.selectedFilm;
    },
  },
  mutations: {
    setSelectedFilm(state, payload) {
       state.selectedFilm = payload;
    },
  },
});

