import {
    RECEIVE_CATEGORY,
  } from "../../actions/categories";
  const _nullSet = { categories: [] }
  export default (state = _nullSet, { type, category }) => {
    Object.freeze(state);
    switch (type) {
      case RECEIVE_CATEGORY:
        return category;
      default:
        return state;
    }
  };
  