import { FETCH_EAST_STANDINGS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EAST_STANDINGS:
      // debugger;
      return [...state, action.payload];
    default:
      return state;
  }
};
