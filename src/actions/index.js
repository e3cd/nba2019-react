import stats from "./../api/stats";
import { endpointConstants } from "./../api/endpoints";
import {
  FETCH_EAST_STANDINGS,
  FETCH_WEST_STANDINGS,
  FETCH_TEAMS,
  FETCH_PLAYERS,
  FETCH_PLAYER_STATS,
  FETCH_TEAM_LEADERS,
  FETCH_TEAM_STATS,
  FETCH_TEAM_SCHEDULE
} from "./types";

export const fetchTeams = () => async dispatch => {
  const getTeams = endpointConstants.FETCH_TEAMS;
  const response = await stats.get(getTeams);
  //   console.log(response.data.league.standard);

  dispatch({
    type: FETCH_TEAMS,
    payload: response.data.league.standard.filter(
      team => team.isNBAFranchise === true
    )
  });
};

export const fetchEastStandings = () => async dispatch => {
  //   const baseURL = endpointConstants.BASE_URL;
  const getTeamStandings = endpointConstants.FETCH_STANDINGS;
  const response = await stats.get(getTeamStandings);
  //   console.log(response.data.league.standard.conference.east);

  dispatch({
    type: FETCH_EAST_STANDINGS,
    payload: response.data.league.standard.conference.east
  });
};

export const fetchWestStandings = () => async dispatch => {
  //   const baseURL = endpointConstants.BASE_URL;
  const getTeamStandings = endpointConstants.FETCH_STANDINGS;
  const response = await stats.get(getTeamStandings);
  //   console.log(response.data.league.standard.conference.west);

  dispatch({
    type: FETCH_WEST_STANDINGS,
    payload: response.data.league.standard.conference.west
  });
};

export const fetchPlayers = () => async dispatch => {
  const getPlayers = endpointConstants.FETCH_PLAYERS;
  const response = await stats.get(getPlayers);
  // console.log(response.data.league.standard);

  dispatch({
    type: FETCH_PLAYERS,
    payload: response.data.league.standard.filter(
      player => player.isActive === true
    )
  });
};

export const fetchPlayerStats = personId => async dispatch => {
  const getPlayerStats = endpointConstants.FETCH_PLAYER_STATS(personId);

  const response = await stats.get(getPlayerStats);
  // console.log(response.data.league.standard.stats.careerSummary);

  dispatch({
    type: FETCH_PLAYER_STATS,
    payload: response.data.league.standard.stats
  });
};

export const fetchTeamStats = () => async dispatch => {
  const getTeamStats = endpointConstants.FETCH_TEAM_STATS;

  const response = await stats.get(getTeamStats);

  dispatch({
    type: FETCH_TEAM_STATS,
    payload: response.data.league.standard.regularSeason
  });
};

export const fetchTeamLeaders = teamId => async dispatch => {
  const getTeamLeaders = endpointConstants.FETCH_TEAM_LEADERS(teamId);

  const response = await stats.get(getTeamLeaders);
  // console.log(response.data.league.standard);
  dispatch({
    type: FETCH_TEAM_LEADERS,
    payload: response.data.league.standard
  });
};

export const fetchTeamSchedule = teamId => async dispatch => {
  const getTeamSchedule = endpointConstants.FETCH_TEAM_SCHEDULE(teamId);

  const response = await stats.get(getTeamSchedule);
  dispatch({
    type: FETCH_TEAM_SCHEDULE,
    payload: response.data.league.standard
  });
};
