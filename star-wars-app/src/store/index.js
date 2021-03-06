import { createStore } from 'vuex';
import DataService from '../services/DataService.js';

export const store = createStore({
  state: {
    entities: [],
    contentView: 'none',
    navigationList: [],
    selectedFilm: '',
    inputText: '',
    loading: true,
  },
  getters: {
    getContentView(state) {
      return state.contentView;
    },

    getLoading(state) {
      return state.loading;
    },

    getNavigationList(state) {
      return state.navigationList;
    },

    getSelectedFilm(state) {
      return state.selectedFilm;
    },

    getEntities(state) {
      return state.entities;
    },

    getFilteredEntities(state) {
      return state.entities.filter(ent => ent.name && ent.name.toLowerCase().search(state.inputText) > -1)
    },

    getInputText(state) {
      return state.inputText;
    },
  },
  mutations: {
    setContentView(state, view) {
      state.contentView = view;
    },

    setLoading(state, payload) {
      state.loading = payload;
    },

    setNavigationList(state, payload) {
      state.navigationList = payload;
    },

    setSelectedFilm(state, payload) {
      state.selectedFilm = payload;
    },

    setInputText(state, payload) {
      state.inputText = payload;
    },

    setEntities(state, payload) {
      payload.forEach((item) => state.entities.push(item));
    },
  },

  actions: {
    setContentView(context, view) {
      context.commit('setContentView', view);
    },

    setLoading(context, payload) {
      context.commit('setLoading', payload);
    },

    getPersons(context) {
      DataService.getAllPersons()
        .then((res) => {
          context.commit('setEntities', res.data.results);
        })
        .catch((e) => console.log(e));
    },

    getFilms(context) {
      DataService.getAllFilms()
        .then((res) => {
          context.commit('setEntities', res.data.result);
          context.commit('setNavigationList', res.data.result);
          context.commit('setLoading', false);
        })
        .catch((e) => console.log(e));
    },

    getStarships(context) {
      DataService.getAllStarships()
        .then((res) => {
          context.commit('setEntities', res.data.results);
        })
        .catch((e) => console.log(e));
    },

    getPlanets(context) {
      DataService.getAllPlanets()
        .then((res) => {
          context.commit('setEntities', res.data.results);
        })
        .catch((e) => console.log(e));
    },

    setSelectedFilm(context, film) {
      context.commit('setSelectedFilm', film);
    },

    setInputText(context, payload) {
      context.commit('setInputText', payload);
    },
  },
});
