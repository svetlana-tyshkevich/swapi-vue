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
}

export default new DataService();
