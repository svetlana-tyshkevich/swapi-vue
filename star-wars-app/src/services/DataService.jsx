import axios from 'axios';

const URL = 'https://www.swapi.tech/api';

class DataService {
    getAllFilms = () => {
        return axios.get(`${URL}/films/`)
    }
    getFilm = (filmPage) => {
        return axios.get(`${URL}/films/${filmPage}`);
    }
}

export default new DataService;