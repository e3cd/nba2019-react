import React, { Component } from "react";
import { fetchPlayerStats, fetchPlayers, fetchTeams } from "../../actions";
import { connect } from "react-redux";
import PlayerInfoCard from "./playerProfileCards/PlayerInfoCard";
import PlayerStatCard from "./playerProfileCards/PlayerStatCard";

import "./PlayerProfile.css";

class PlayerProfile extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchPlayerStats(this.props.match.params.id);
    this.props.fetchTeams();
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
    // //get last Player stats from redux state using pop
    const lastPlayerStats = this.props.playerStats.pop();
    // console.log(lastPlayerStats.careerSummary);

    const searchedPlayerProfile = this.getPlayerProfile(
      this.props.match.params.id
    );

    const listOfTeams = this.props.teams;

    return (
      <div className="profile-container">
        <PlayerInfoCard info={searchedPlayerProfile} teams={listOfTeams} />
        {lastPlayerStats && (
          <PlayerStatCard stats={lastPlayerStats} teams={listOfTeams} />
        )}
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
