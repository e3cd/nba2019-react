import React, { Component } from "react";
import "./TeamStatsCard.css";

export default class TeamStatsCard extends Component {
  fetchStats = teamId => {
    return this.props.teamStats.teams.find(team => team.teamId === teamId);
  };

  render() {
    // console.log(this.props.teamStats.teams);
    // console.log(this.props);
    const currentTeamStats = this.fetchStats(this.props.teamId);

    // console.log(currentTeamStats);

    const stats = {
      ppg: "Points Per Game",
      oppg: "Points Allowed Per Game",
      trpg: "Rebounds Per Game",
      apg: "Assists Per Game",
      spg: "Steals Per Game",
      bpg: "Blocks Per Game",
      fgp: "Field Goal Percentage",
      ftp: "Free Throw Percentage",
      tpp: "Three Point Percentage",
      tpg: "Turnovers Per Game",
      pfpg: "Fouls Per Game"
    };
    return (
      <div className="team-stats-card">
        <h1 style={{ textAlign: "center" }}>Team Stats</h1>
        <div className="team-rank">
          <div />
          <div />
          <div>
            <h3>Rank</h3>
          </div>
        </div>
        {Object.entries(stats).map((stat, index) => {
          const teamStat = stat[0];
          const statName = stat[1];

          const fetchedStat = currentTeamStats[teamStat].avg;
          const fetchedRanking = currentTeamStats[teamStat].rank;
          // console.log(statName);
          // console.log(fetchedStat);

          return (
            <div className="team-stat-list" key={index}>
              <div>
                <h3>{statName}</h3>
              </div>
              <div>{fetchedStat}</div>
              <div>{fetchedRanking}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
