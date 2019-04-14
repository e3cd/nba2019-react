import React, { Component } from "react";
import "./StandingsPage.css";

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
    return this.props.teams.find(team => team.teamId === teamId);
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

  renderStandings = () => {
    return <ul />;
  };

  render() {
    console.log(this.state);
    console.log(this.props.teams);
    console.log(this.props.east);
    console.log(this.props.west);

    return (
      <div>
        <div className="btn-container">
          <button className="btn" onClick={this.toggleEast}>
            Eastern Conference
          </button>
          <button className="btn" onClick={this.toggleWest}>
            Western Conference
          </button>
        </div>
        <div className="standings-container" />
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
