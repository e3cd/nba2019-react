import { combineReducers } from "redux";
import teamsReducer from "./teamsReducer";
import eastReducer from "./eastReducer";
import westReducer from "./westReducer";
import allPlayersReducer from "./allPlayersReducer";
import playerStatsReducer from "./playerStatsReducer";

export default combineReducers({
  teams: teamsReducer,
  eastStandings: eastReducer,
  westStandings: westReducer,
  players: allPlayersReducer,
  playerStats: playerStatsReducer
});
