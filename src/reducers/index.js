import { combineReducers } from "redux";
import teamsReducer from "./teamsReducer";
import eastReducer from "./eastReducer";
import westReducer from "./westReducer";
import allPlayersReducer from "./allPlayersReducer";
import playerStatsReducer from "./playerStatsReducer";
import teamStatsReducer from "./teamStatsReducer";
import teamLeadersReducer from "./teamLeadersReducer";
import teamScheduleReducer from "./teamScheduleReducer";

export default combineReducers({
  teams: teamsReducer,
  eastStandings: eastReducer,
  westStandings: westReducer,
  players: allPlayersReducer,
  playerStats: playerStatsReducer,
  teamStats: teamStatsReducer,
  teamLeaders: teamLeadersReducer,
  teamSchedule: teamScheduleReducer
});
