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

  newSeasonStats = list => {
    return list.map(team => {
      team.tricode = this.getTeamName(team.teamId).tricode;

      return team;
    });
  };

  newCareerStats = list => {
    return list.map(season => {
      season.teams[0].tricode = this.getTeamName(
        season.teams[0].teamId
      ).tricode;
      season.teams[0].year = season.seasonYear;

      return season;
    });
  };

  renderSeasonStats = list => {
    const stats = [
      "tricode",
      "gamesPlayed",
      "gamesStarted",
      "ppg",
      "rpg",
      "apg",
      "fgp",
      "ftp",
      "tpp",
      "spg",
      "bpg",
      "topg",
      "tpm",
      "mpg",
      "dd2",
      "td3"
    ];

    return list.map(team => {
      return (
        <div>
          {stats.map((stat, index) => {
            return <div key={index}>{team[stat]}</div>;
          })}
        </div>
      );
    });
  };

  renderCareerStats = list => {
    const stats = [
      "year",
      "tricode",
      "gamesPlayed",
      "gamesStarted",
      "ppg",
      "rpg",
      "apg",
      "fgp",
      "ftp",
      "tpp",
      "spg",
      "bpg",
      "topg",
      "tpm",
      "mpg",
      "dd2",
      "td3"
    ];

    return list.reverse().map(season => {
      return (
        <div className="career-stat-list">
          {stats.map((stat, index) => {
            return <div key={index}>{season.teams[0][stat]}</div>;
          })}
        </div>
      );
    });
  };

  render() {
    const seasonStats = this.newSeasonStats(
      this.props.stats.regularSeason.season[0].teams
    );
    const allSeasonStats = this.newCareerStats(
      this.props.stats.regularSeason.season
    );

    const careerTotals = this.props.stats.careerSummary;

    console.log(allSeasonStats);
    console.log(careerTotals);

    const stats = {
      Year: "",
      Team: "Team",
      GP: "Games Played",
      GS: "Games Started",
      PPG: "Points Per Game",
      RPG: "Rebounds Per Game",
      APG: "Assists Per Game",
      FGP: "Field Goal Percentage",
      FTP: "Free Throw Percentage",
      TPP: "Three Point Percentage",
      SPG: "Steals Per Game",
      BPG: "Blocks Per Game",
      TPG: "Turnovers per game",
      TPM: "Three Pointers Made",
      MPG: "Minutes Per Game",
      DDL: "Double Doubles",
      TDL: "Triple Doubles"
    };

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
        <div className="stat-list-container">
          <div className={this.state.season ? "season-stat-list" : null}>
            <div
              style={{ fontWeight: "700" }}
              className={!this.state.season ? "career-stat-list" : null}
            >
              {this.state.season
                ? Object.values(stats).map((stat, index) => {
                    return <div key={index}>{stat}</div>;
                  })
                : Object.keys(stats).map((stat, index) => {
                    return <div key={index}>{stat}</div>;
                  })}
            </div>

            {this.state.season ? (
              <div className="season-stat-value">
                {this.renderSeasonStats(seasonStats)}
              </div>
            ) : (
              <div>{this.renderCareerStats(allSeasonStats)}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerStatCard;
