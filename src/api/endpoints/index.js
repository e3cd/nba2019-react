export const endpointConstants = {
  // BASE_URL: `https://data.nba.net`,

  FETCH_TEAMS: `/prod/v2/2018/teams.json`,
  FETCH_STANDINGS: `/prod/v1/current/standings_conference.json`,
  FETCH_PLAYERS: `/prod/v1/2018/players.json`,
  FETCH_PLAYOFF_BRACKET: `/data/10s/prod/v1/2018/playoffsBracket.json`,
  FETCH_TEAM_STATS: `/prod/v1/2018/team_stats_rankings.json`,

  FETCH_PLAYER_STATS: personId =>
    `/prod/v1/2018/players/${personId}_profile.json`,

  FETCH_PLAYER_HEADSHOT: personId =>
    `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`,

  // FETCH_TEAM_ROSTER: teamId => `/prod/v1/2018/teams/${teamId}/roster.json`,

  FETCH_TEAM_LEADERS: teamId => `/prod/v1/2018/teams/${teamId}/leaders.json`,

  FETCH_TEAM_SCHEDULE: teamId => `/prod/v1/2018/teams/${teamId}/schedule.json`,

  TEAM_LOGO: tricode =>
    `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${tricode.toLowerCase()}.png`
};
