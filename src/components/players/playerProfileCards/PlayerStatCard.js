import React, { Component } from "react";
import "./PlayerStatsCard.css";

class PlayerStatCard extends Component {
  state = { season: true, career: false };

  toggleSeason = () => {
    this.setState({
      season: true,
      career: false
    });
  };

  toggleCareer = () => {
    this.setState({
      season: false,
      career: true
    });
  };

  getTeamName = teamId => {
    return this.props.teams.find(team => team.teamId === teamId);
  };

  renderSeasonStats = list => {
    return list.length > 1 ? (
      list.map(team => {
        return (
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>{this.getTeamName(team.teamId).tricode}</b>
            </li>
            <li>{team.gamesPlayed}</li>
            <li>{team.gamesStarted}</li>
            <li>{team.ppg}</li>
            <li>{team.rpg}</li>
            <li>{team.apg}</li>
            <li>{team.fgp}</li>
            <li>{team.ftp}</li>
            <li>{team.spg}</li>
            <li>{team.bpg}</li>
            <li>
              {Math.round((team.turnovers / team.gamesPlayed) * 100) / 100}
            </li>
            <li>{team.mpg}</li>
            <li>{team.dd2}</li>
            <li>{team.td3}</li>
          </ul>
        );
      })
    ) : (
      <ul style={{ listStyle: "none" }}>
        <li>&nbsp;</li>

        <li>{list[0].gamesPlayed}</li>
        <li>{list[0].gamesStarted}</li>
        <li>{list[0].ppg}</li>
        <li>{list[0].rpg}</li>
        <li>{list[0].apg}</li>
        <li>{list[0].fgp}</li>
        <li>{list[0].ftp}</li>
        <li>{list[0].spg}</li>
        <li>{list[0].bpg}</li>
        <li>
          {Math.round((list[0].turnovers / list[0].gamesPlayed) * 100) / 100}
        </li>
        <li>{list[0].mpg}</li>
        <li>{list[0].dd2}</li>
        <li>{list[0].td3}</li>
      </ul>
    );
  };

  renderCareerStats = list => {
    return (
      <ul style={{ listStyle: "none" }}>
        <li>&nbsp;</li>
        <li>{list.gamesPlayed}</li>
        <li>{list.gamesStarted}</li>
        <li>{list.ppg}</li>
        <li>{list.rpg}</li>
        <li>{list.apg}</li>
        <li>{list.fgp}</li>
        <li>{list.ftp}</li>
        <li>{list.spg}</li>
        <li>{list.bpg}</li>
        <li>{Math.round((list.turnovers / list.gamesPlayed) * 100) / 100}</li>
        <li>{list.mpg}</li>
        <li>{list.dd2}</li>
        <li>{list.td3}</li>
      </ul>
    );
  };

  render() {
    const seasonStats = this.props.stats.regularSeason.season[0].teams;

    const careerStats = this.props.stats.careerSummary;
    return (
      <div className="stat-card">
        <div className="stat-btn-container">
          <button
            className={this.state.season ? "stat-btn-active" : "stat-btn"}
            onClick={this.toggleSeason}
          >
            Season
          </button>
          <button
            className={this.state.career ? "stat-btn-active" : "stat-btn"}
            onClick={this.toggleCareer}
          >
            Career
          </button>
        </div>
        <div className="stat-list">
          <ul style={{ listStyle: "none" }}>
            <li>&nbsp;</li>
            <li>
              <b>Games Played:</b>
            </li>
            <li>
              <b>Games Started:</b>
            </li>
            <li>
              <b>Points Per Game:</b>
            </li>
            <li>
              <b>Rebounds Per Game:</b>
            </li>
            <li>
              <b>Assists Per Game:</b>
            </li>
            <li>
              <b>Field Goal Percentage:</b>
            </li>
            <li>
              <b>Free Throw Percentage:</b>
            </li>
            <li>
              <b>Steals Per Game:</b>
            </li>
            <li>
              <b>Blocks Per Game:</b>
            </li>
            <li>
              <b>Turnovers Per Game:</b>
            </li>
            <li>
              <b>Minutes Per Game:</b>
            </li>
            <li>
              <b>Double Doubles:</b>
            </li>
            <li>
              <b>Triple Doubles:</b>
            </li>
          </ul>
          {this.state.season
            ? this.renderSeasonStats(seasonStats)
            : this.renderCareerStats(careerStats)}
        </div>
      </div>
    );
  }
}

export default PlayerStatCard;
