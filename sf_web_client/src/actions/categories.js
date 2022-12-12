import category from '../reducers/category/category';
import * as apiUtil from '../util/session';
import { receiveErrors } from "./error";
const HOME_CATEGORIES_URL = '/content-category/'
const CONTENTS_URL = '/content/'

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const RECEIVE_CONTENT_PAGE = 'RECEIVE_CONTENT_PAGE';

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    data: category
  });
const receiveContent = content => ({
    type: RECEIVE_CONTENT,
    data: content
  });
  const receiveContentPage = content_page => ({
    type: RECEIVE_CONTENT_PAGE,
    data: content_page
  });

  export const getCategories = parent_id => async dispatch => {
    let url = HOME_CATEGORIES_URL;
      if(parent_id){
        url += "?parent_category=" + parent_id;
      }
      else{
        url += "?root_category=True";
      }
    const response = await apiUtil.getData(url);
  if (response.statusText === "OK") {
      return dispatch(receiveCategory(response.data.results));
    }
    return dispatch(receiveErrors(response.data));
}

export const getContents = parent_id => async dispatch => {
  if (parent_id == null) {
    return dispatch(receiveContent([]));
  }
  let url = CONTENTS_URL + "?category=" + parent_id;
  const response = await apiUtil.getData(url);
if (response.statusText === "OK") {
    return dispatch(receiveContent(response.data.results));
  }
  return dispatch(receiveContent(response.data));
}

export const getContentPage = content_id => async dispatch => {
  let url = CONTENTS_URL + content_id + '/';
  const response = await apiUtil.getData(url);
if (response.statusText === "OK") {
    return dispatch(receiveContentPage(response.data));
  }
  return dispatch(receiveContentPage(response.data));
}