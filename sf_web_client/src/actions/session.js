import * as apiUtil from '../util/session';
import { receiveErrors } from "./error";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
  });
  const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
  });

  export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
  if (response.statusText === "Accepted") {
      return dispatch(receiveCurrentUser(response.data));
    }
    return dispatch(receiveErrors(response.data));
  };
  export const signup = user => async dispatch => {
    const response = await apiUtil.signup(user);
    
    if (response.statusText === "Accepted") {
      return dispatch(receiveCurrentUser(response.data));
    }
    return dispatch(receiveErrors(response.data));
  };
  export const logout = () => async dispatch => {
    const response = await apiUtil.logout();
  if (response.statusText === "Accepted") {
      return dispatch(logoutCurrentUser());
    }
    return dispatch(receiveErrors(response.data));
  };
