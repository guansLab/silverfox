import {
    RECEIVE_CATEGORY,
    RECEIVE_CONTENT,
    RECEIVE_CONTENT_PAGE
  } from "../../actions/categories";
  const _nullSet = { categories: [], contents: [], contentPage: [] }
  export default (state = _nullSet, { type, data }) => {
    Object.freeze(state);
    switch (type) {
      case RECEIVE_CATEGORY:
        return { 
          ...state,
          categories: data 
        };

      case RECEIVE_CONTENT:
        return {
          ...state,
          contents: data};
        
      case RECEIVE_CONTENT_PAGE:
            return {
              ...state,
              contentPage: data};
      default:
        return state;
    }
  };
  