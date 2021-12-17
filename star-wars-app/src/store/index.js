import { createStore } from 'vuex';
import DataService from '../services/DataService.js';


export const store = createStore({
  state: {
    entities: [],
    selectedFilm: 'https://www.swapi.tech/api/films/1',
    inputText: '',
  },
  getters: {
    getSelectedFilm(state) {
      return state.selectedFilm;
    },

    getEntities(state) {
        const ent = state.entities
        console.log(ent[0] );
      return state.entities;
    },

    getFilteredEntities(state) {
        const searchText = state.searchText
        const filteredEntities = state.entities.filter(item => {
         item['properties']['title'] && item['properties']['title'].search(searchText) > -1 ||
         item['name'] 
         && item.name.search(searchText) > -1
      }
      )
      console.log(filteredEntities)
      return filteredEntities;
    },

    getInputText(state) {
      return state.inputText;
    },
  },
  mutations: {
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

    setInputText(context, payload) {
      context.commit('setInputText', payload);
    },
  },
});
