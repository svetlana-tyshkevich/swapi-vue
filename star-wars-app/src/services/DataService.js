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
    return axios.get(`${URL}/planets?page=1&limit=60`);
  };

  getAllStarships = () => {
    return axios.get(`${URL}/starships?page=1&limit=36`);
  };

  getAllPersons = () => {
    return axios.get(`${URL}/people?page=1&limit=82`);
  };
}

export default new DataService();
