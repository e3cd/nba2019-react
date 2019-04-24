import { FETCH_TEAM_STATS } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAM_STATS:
      return [...state, action.payload];
    default:
      return state;
  }
};
