import React, { Component } from "react";
import "./StandingsPage.css";
import { endpointConstants } from "./../../api/endpoints";
import {
  fetchTeams,
  fetchEastStandings,
  fetchWestStandings
} from "./../../actions/index";
import { connect } from "react-redux";

class StandingsPage extends Component {
  state = { east: true, west: false };

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchEastStandings();
    this.props.fetchWestStandings();
  }

  getTeamName = teamId => {
    // console.log(this.props.teams);
    return this.props.teams !== undefined
      ? this.props.teams.find(team => team.teamId === teamId)
      : null;
  };

  toggleWest = () => {
    this.setState({
      east: false,
      west: true
    });
  };

  toggleEast = () => {
    this.setState({
      east: true,
      west: false
    });
  };

  renderStandings = conference => {
    return (
      <ul className="standings-table">
        <li className="standings-header">
          <label>
            <b>Rank</b>
          </label>
          <label>
            <b>Team</b>
          </label>
          <label>
            <b>Win</b>
          </label>
          <label>
            <b>Loss</b>
          </label>
          <label>
            <b>Home</b>
          </label>
          <label>
            <b>Away</b>
          </label>
          <label>
            <b>Streak</b>
          </label>
        </li>
        {conference
          ? conference.map((team, ind) => {
              let teamLogo = this.getTeamName(team.teamId).tricode;
              let imgSrc = endpointConstants.TEAM_LOGO(teamLogo);

              return (
                <li
                  key={team.teamId}
                  className={
                    ind % 2 === 0
                      ? `standings-item standings-second`
                      : `standings-item`
                  }
                >
                  <label>{ind + 1}</label>
                  <label className="standings-team">
                    <img
                      src={imgSrc}
                      className="standings-logo"
                      alt="nba team logo"
                    />
                    {this.getTeamName(team.teamId).fullName}
                  </label>
                  <label>{team.win}</label>
                  <label>{team.loss}</label>
                  <label>
                    {team.homeWin} - {team.homeLoss}
                  </label>
                  <label>
                    {team.awayWin} - {team.awayLoss}
                  </label>
                  <label>
                    {team.streak}
                    {team.isWinStreak ? `W` : `L`}
                  </label>
                </li>
              );
            })
          : null}
      </ul>
    );
  };

  render() {
    let east = this.renderStandings(this.props.east);
    let west = this.renderStandings(this.props.west);

    return (
      <div>
        <div className="btn-container">
          <button
            className={this.state.east ? "btn-active" : "btn"}
            onClick={this.toggleEast}
          >
            Eastern Conference
          </button>
          <button
            className={this.state.west ? "btn-active" : "btn"}
            onClick={this.toggleWest}
          >
            Western Conference
          </button>
        </div>
        <div className="standings-container">
          {this.state.east ? east : west}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    east: state.eastStandings[0],
    west: state.westStandings[0],
    teams: state.teams[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams, fetchEastStandings, fetchWestStandings }
)(StandingsPage);
