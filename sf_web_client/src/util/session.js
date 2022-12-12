import axios from '../axios';
const REGISTER_URL = '/register/';
const LOGIN_URL = '/login/';
const LOGOUT_URL = '/logout/';

export const signup = user => (
    axios.post(REGISTER_URL,{
        email: user.email, 
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        confirm_password: user.confirm_password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      }
    )
  );
  export const login = user => (
    axios.post(LOGIN_URL,{
        username: user.username, 
        password: user.password,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      }
    )
  );
  export const logout = () => (
    axios.post(LOGOUT_URL, {}, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      }
      )
  );
  export const getData = url => {
      return axios.get(url,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      });
  }
