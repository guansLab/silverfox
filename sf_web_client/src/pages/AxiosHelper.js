import axios from '../axios';

export const getResult = url => {
return axios.get(url,
{
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});
}