import axios from 'axios';

const URL = 'https://www.swapi.tech/api';

class DataService {
  getByUrl = (url) => {
    return axios.get(url);
  };

  getAllFilms = () => {
    return axios.get(`${URL}/films/`);
  };

  getFilm = (filmPage) => {
    return axios.get(`${URL}/films/${filmPage}`);
  };

  getAllPlanets = () => {
    return axios.get(`${URL}/planets/`);
  };

  getAllStarships = () => {
    return axios.get(`${URL}/starships/`);
  };

  getAllPersons = () => {
    return axios.get(`${URL}/people/`);
  };
}

export default new DataService();
