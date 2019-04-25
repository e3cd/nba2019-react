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

    console.log(currentTeamStats);
    const stats = {
      ppg: "Points Per Game",
      oppg: "Points Allowed Per Game",
      trpg: "Rebounds Per Game",
      apg: "Assists Per Game",
      spg: "Steals Per Game",
      bpg: "Blocks Per Game",
      fgp: "Field Goal Percentage",
      ftp: "Free Throw Percentage"
    };
    return (
      <div className="team-stats-card">
        <h1>Team Stats</h1>
        {Object.keys(stats).map(stat => {
          const teamStat = currentTeamStats[stat].avg;
          const teamRank = currentTeamStats[stat].rank;
          console.log(teamStat);
          return (
            <div key={stat}>
              {teamStat} {teamRank}
            </div>
          );
        })}
      </div>
    );
  }
}
