import axios from 'axios';

const URL = 'https://www.swapi.tech/api';

class DataService {
    getAllFilms = () => {
        return axios.get(`${URL}/films/`)
    }
}

export default new DataService;