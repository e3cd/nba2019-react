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
      team.tpg = Math.round((team.tpm / team.gamesPlayed) * 100) / 100;
      return team;
    });
  };

  newCareerStats = list => {
    return list.map(season => {
      season.teams[0].tricode = this.getTeamName(
        season.teams[0].teamId
      ).tricode;
      season.teams[0].year = season.seasonYear;
      season.teams[0].tpg =
        Math.round((season.teams[0].tpm / season.teams[0].gamesPlayed) * 100) /
        100;
      return season;
    });
  };

  newCareerTotals = list => {
    list.tpg = Math.round((list.tpm / list.gamesPlayed) * 100) / 100;
    list.topg = Math.round((list.turnovers / list.gamesPlayed) * 100) / 100;

    return list;
  };

  renderSeasonStats = list => {
    const stats = [
      "tricode",
      "gamesPlayed",
      "gamesStarted",
      "mpg",
      "ppg",
      "rpg",
      "apg",
      "fgp",
      "ftp",
      "tpp",
      "tpg",
      "spg",
      "bpg",
      "topg",

      "dd2",
      "td3"
    ];

    return list.map((team, index) => {
      return (
        <div key={index}>
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
      "mpg",
      "ppg",
      "rpg",
      "apg",
      "fgp",
      "ftp",
      "tpp",
      "tpg",
      "spg",
      "bpg",
      "topg",
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

  renderCareerTotals = list => {
    const stats = [
      "gamesPlayed",
      "gamesStarted",
      "mpg",
      "ppg",
      "rpg",
      "apg",
      "fgp",
      "ftp",
      "tpp",
      "tpg",
      "spg",
      "bpg",
      "topg",
      "dd2",
      "td3"
    ];

    return (
      <div className="career-total-list">
        <div>Career</div>
        {stats.map((stat, index) => {
          return <div key={index}>{list[stat]}</div>;
        })}
      </div>
    );
  };

  render() {
    const seasonStats = this.newSeasonStats(
      this.props.stats.regularSeason.season[0].teams
    );
    const allSeasonStats = this.newCareerStats(
      this.props.stats.regularSeason.season
    );

    const careerTotals = this.newCareerTotals(this.props.stats.careerSummary);

    const stats = {
      Year: "",
      Team: "Team",
      GP: "Games Played",
      GS: "Games Started",
      MPG: "Minutes Per Game",
      PPG: "Points Per Game",
      RPG: "Rebounds Per Game",
      APG: "Assists Per Game",
      FGP: "Field Goal Percentage",
      FTP: "Free Throw Percentage",
      TPP: "Three Point Percentage",
      TPG: "Threes Per Game",
      SPG: "Steals Per Game",
      BPG: "Blocks Per Game",
      TOG: "Turnovers per game",
      DDL: "Double Doubles",
      TDL: "Triple Doubles"
    };

    return (
      <div className="stat-card" key={seasonStats}>
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
        <div className="stat-list-container" key={careerTotals}>
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
              <div key={allSeasonStats}>
                {[
                  this.renderCareerStats(allSeasonStats),
                  this.renderCareerTotals(careerTotals)
                ]}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerStatCard;
