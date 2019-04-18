import React, { Component } from "react";
import { fetchPlayers, fetchPlayerStats, fetchTeams } from "./../../actions";
import { connect } from "react-redux";
import PlayerSearchButton from "./PlayerSearchButton";

class PlayerSearch extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchTeams();
  }
  render() {
    // console.log(this.props.players);
    return (
      <PlayerSearchButton
        getPlayers={this.props.players}
        getTeams={this.props.teams}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players[0],
    playerStats: state.playerStats[0],
    teams: state.teams[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchPlayerStats, fetchPlayers, fetchTeams }
)(PlayerSearch);
