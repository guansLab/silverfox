import axios from '../axios';
const REGISTER_URL = '/register/';
const LOGIN_URL = '/login/';
const LOGOUT_URL = '/logout/';
const HOME_CATEGORIES_URL = '/content-category/'

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
  export const category = parent_id => {
    let url;
      if(parent_id){
        url += "?parent_category=" + parent_id;
      }
      else{
        url += "?root_category=True";
      }
      axios.get(url,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      });
  }
  