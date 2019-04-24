import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchTeamStats,
  fetchTeamLeaders,
  fetchTeams,
  fetchPlayers
} from "./../../actions";
import { endpointConstants } from "./../../api/endpoints";
import TeamLeadersCard from "./teamPageCards/TeamLeadersCard";
import TeamStatsCard from "./teamPageCards/TeamStatsCard";
import TeamRoster from "./teamPageCards/TeamRoster";
import "./TeamPage.css";

class TeamPage extends Component {
  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchTeamStats();
    this.props.fetchTeamLeaders(this.props.match.params.id);
    this.props.fetchPlayers();
  }

  componentWillMount() {
    this.props.fetchTeamLeaders(this.props.match.params.id);
  }

  getTeam = teamId => {
    return this.props.teams !== undefined
      ? this.props.teams.find(team => team.teamId === teamId)
      : null;
  };

  render() {
    const teamId = this.props.match.params.id;

    const selectedTeam = teamId !== null ? this.getTeam(teamId) : null;
    const teamImg =
      selectedTeam !== null
        ? endpointConstants.TEAM_LOGO(selectedTeam.tricode)
        : null;
    const teamName = selectedTeam !== null ? selectedTeam.fullName : null;

    const teamStats =
      this.props.teamStats !== undefined ? this.props.teamStats.teams : null;

    const allPlayers = this.props.players;

    //make a new array with fullName of each player
    const newPlayers =
      allPlayers !== undefined
        ? allPlayers.map(
            player =>
              (player.fullName = player.firstName + " " + player.lastName)
          )
        : null;
    // console.log(teamStats);
    // console.log(selectedTeam);
    // console.log(allPlayers);
    // console.log(this.props.teamLeaders);
    const teamLeaders =
      this.props.teamLeaders !== undefined
        ? this.props.teamLeaders.pop()
        : null;

    // console.log(teamLeaders);

    return (
      <div className="team-page-container">
        <div className="team-header">
          <div className="team-page-logo">
            <img src={teamImg} alt="logo" className="team-page-image" />
          </div>
          <div className="team-page-name">{teamName}</div>
        </div>

        <div className="team-stats-cards">
          {teamLeaders !== undefined && allPlayers !== undefined ? (
            <TeamLeadersCard
              teamLeaders={teamLeaders}
              allPlayers={allPlayers}
            />
          ) : null}

          <TeamStatsCard teamStats={teamStats} />
        </div>
        {allPlayers !== undefined ? (
          <TeamRoster
            allPlayers={allPlayers}
            teamId={teamId}
            teamImg={teamImg}
            key={teamId}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams[0],
    teamStats: state.teamStats[0],
    teamLeaders: state.teamLeaders,
    players: state.players[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchTeamStats, fetchTeamLeaders, fetchTeams, fetchPlayers }
)(TeamPage);
