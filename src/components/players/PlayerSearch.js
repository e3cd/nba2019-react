import React, { Component } from "react";
import { fetchPlayers, fetchPlayerStats } from "./../../actions";
import { connect } from "react-redux";
import PlayerSearchButton from "./PlayerSearchButton";

class PlayerSearch extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render() {
    // console.log(this.props.players);
    return <PlayerSearchButton getPlayers={this.props.players} />;
  }
}

const mapStateToProps = state => {
  return {
    players: state.players[0],
    playerStats: state.playerStats[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchPlayerStats, fetchPlayers }
)(PlayerSearch);
