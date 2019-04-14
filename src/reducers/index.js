import { combineReducers } from "redux";
import teamsReducer from "./teamsReducer";
import eastReducer from "./eastReducer";
import westReducer from "./westReducer";

export default combineReducers({
  teams: teamsReducer,
  eastStandings: eastReducer,
  westStandings: westReducer
});
