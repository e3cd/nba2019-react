import stats from "./../api/stats";
import { endpointConstants } from "./../api/endpoints";
import { FETCH_STANDINGS } from "./types";

export const fetchStandings = () => async dispatch => {
  //   const baseURL = endpointConstants.BASE_URL;
  const getTeamStandings = endpointConstants.FETCH_STANDINGS;
  const response = await stats.get(getTeamStandings);
  console.log(response);
  dispatch({ type: FETCH_STANDINGS, payload: response.data });
};
