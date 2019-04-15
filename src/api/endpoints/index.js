export const endpointConstants = {
  // BASE_URL: `https://data.nba.net`,

  FETCH_TEAMS: `/prod/v2/2018/teams.json`,
  FETCH_STANDINGS: `/prod/v1/current/standings_conference.json`,
  TEAM_LOGO: tricode =>
    `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${tricode.toLowerCase()}.png`
};
