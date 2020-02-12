import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.13.37.96:3333',
    baseURL: 'http://10.13.37.25:3333',
});

export default api;
