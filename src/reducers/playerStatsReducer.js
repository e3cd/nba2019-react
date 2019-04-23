import { FETCH_PLAYER_STATS } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PLAYER_STATS:
      return [...state, action.payload];
    default:
      return state;
  }
};
