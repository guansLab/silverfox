import { combineReducers } from 'redux';
import errors from './errors/errors';
import session from './session/session';
import category from './category/category';
export default combineReducers({
  session,
  errors,
  category
});
