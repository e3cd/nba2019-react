import { FETCH_PLAYERS } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return [...state, action.payload];

    default:
      return state;
  }
};
