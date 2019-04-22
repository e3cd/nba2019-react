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

  renderStatsList = list => {
    return list ? (
      <div className="stat-list">
        <ul style={{ listStyle: "none" }}>
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
        <ul style={{ listStyle: "none" }}>
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
      </div>
    ) : null;
  };

  render() {
    // console.log(this.props.stats.regularSeason.season[0].teams[0]);
    // console.log(this.props.stats.careerSummary);
    const seasonStats = this.props.stats.regularSeason.season[0].teams[0];
    const careerStats = this.props.stats.careerSummary;

    // console.log(seasonStats);
    console.log(careerStats);
    // console.log(this.props.stats);
    // const regularSeason = this.props.stats.regularSeason
    // console.log(this.props.stats.regularSeason.season[0]);
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
        {this.state.season
          ? this.renderStatsList(seasonStats)
          : this.renderStatsList(careerStats)}
      </div>
    );
  }
}

export default PlayerStatCard;
