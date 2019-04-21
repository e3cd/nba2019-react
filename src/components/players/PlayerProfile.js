import React, { Component } from "react";
import { fetchPlayerStats, fetchPlayers, fetchTeams } from "../../actions";
import { connect } from "react-redux";
import PlayerInfo from "./playerStatsCards/PlayerInfo";
import PlayerStatCard from "./playerStatsCards/PlayerStatCard";

class PlayerProfile extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchPlayerStats(this.props.match.params.id);
    this.props.fetchTeams();
  }

  //use componentWillMOUNT TO store the stats prop
  componentWillMount() {
    this.props.fetchPlayerStats(this.props.match.params.id);
  }

  getPlayerStats = playerId => {
    return !this.props.players ? null : this.props.fetchPlayerStats(playerId);
  };

  getPlayerProfile = personId => {
    return !this.props.players
      ? null
      : this.props.players.find(player => player.personId === personId);
  };

  render() {
    // console.log(this.props.players);
    // console.log(this.props.playerStats);
    // //get last Player stats from redux state using pop
    const lastPlayerStats = this.props.playerStats.pop();
    // console.log(lastPlayerStats);
    // console.log(this.props.match.params.id);
    const searchedPlayerProfile = this.getPlayerProfile(
      this.props.match.params.id
    );
    // console.log(searchedPlayerProfile);

    return (
      <div>
        <PlayerInfo info={searchedPlayerProfile} />
        <PlayerStatCard stats={lastPlayerStats} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players[0],
    playerStats: state.playerStats,
    teams: state.teams[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchPlayerStats, fetchPlayers, fetchTeams }
)(PlayerProfile);
