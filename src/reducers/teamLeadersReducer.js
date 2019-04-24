import { FETCH_TEAM_LEADERS } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAM_LEADERS:
      return [...state, action.payload];
    default:
      return state;
  }
};
