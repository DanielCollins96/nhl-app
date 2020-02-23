import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hockeydata-e277a.firebaseio.com/'
});

export default instance;