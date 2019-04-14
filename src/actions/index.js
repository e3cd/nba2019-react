import stats from "./../api/stats";
import { endpointConstants } from "./../api/endpoints";
import {
  FETCH_EAST_STANDINGS,
  FETCH_WEST_STANDINGS,
  FETCH_TEAMS
} from "./types";

export const fetchTeams = () => async dispatch => {
  const getTeams = endpointConstants.FETCH_TEAMS;
  const response = await stats.get(getTeams);
  console.log(response.data.league.standard);

  dispatch({ type: FETCH_TEAMS, payload: response.data.league.standard });
};

export const fetchEastStandings = () => async dispatch => {
  //   const baseURL = endpointConstants.BASE_URL;
  const getTeamStandings = endpointConstants.FETCH_STANDINGS;
  const response = await stats.get(getTeamStandings);
  console.log(response.data.league.standard.conference.east);

  dispatch({
    type: FETCH_EAST_STANDINGS,
    payload: response.data.league.standard.conference.east
  });
};

export const fetchWestStandings = () => async dispatch => {
  //   const baseURL = endpointConstants.BASE_URL;
  const getTeamStandings = endpointConstants.FETCH_STANDINGS;
  const response = await stats.get(getTeamStandings);
  console.log(response.data.league.standard.conference.west);

  dispatch({
    type: FETCH_WEST_STANDINGS,
    payload: response.data.league.standard.conference.west
  });
};
