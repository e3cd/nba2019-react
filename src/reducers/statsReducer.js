import { FETCH_STANDINGS } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STANDINGS:
      return [...state, action.payload];

    default:
      return state;
  }
};
