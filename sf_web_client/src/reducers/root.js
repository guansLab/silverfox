import { combineReducers } from 'redux';
import errors from './errors/errors';
import session from './session/session';
import categoryData from './category/category';
export default combineReducers({
  session,
  errors,
  categoryData,
});
