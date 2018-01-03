import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export { getPublicEstados };

function getPublicEstados() {
    const url = `${BASE_URL}/api/estados`;
    return axios.get(url).then(response => response.data);
}