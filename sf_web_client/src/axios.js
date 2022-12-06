import axios from 'axios';
export default axios.create({
    baseURL: 'http://131.123.39.125/:8000/api',
});
