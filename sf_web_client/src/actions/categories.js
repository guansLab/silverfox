import * as apiUtil from '../util/session';
import { receiveErrors } from "./error";

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategory = user => ({
    type: RECEIVE_CATEGORY,
    category
  });

  export const category = parent_id => async dispatch => {
    const response = await apiUtil.category(parent_id);
  if (response.statusText === "Accepted") {
      return dispatch(receiveCategory(response.data));
    }
    return dispatch(receiveErrors(response.data));
}