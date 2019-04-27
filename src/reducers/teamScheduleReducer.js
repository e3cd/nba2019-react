import { FETCH_TEAM_SCHEDULE } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAM_SCHEDULE:
      return [...state, action.payload];
    default:
      return state;
  }
};
