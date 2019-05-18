import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
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
import TeamScheduleCard from "./teamPageCards/TeamScheduleCard";

import "./TeamPage.css";

class TeamPage extends Component {
  componentDidMount() {
    this.props.fetchTeamLeaders(this.props.match.params.id);
    this.props.fetchTeams();
    this.props.fetchTeamStats();
    this.props.fetchPlayers();
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps, this.props)) {
      this.props.fetchTeamLeaders(this.props.match.params.id);
    }
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

    const teamStats = this.props.teamStats;

    const allPlayers = this.props.players;

    //make a new array with fullName of each player
    const newPlayers =
      allPlayers !== undefined
        ? allPlayers.map(
            player =>
              (player.fullName = player.firstName + " " + player.lastName)
          )
        : null;

    const teamLeaders =
      this.props.teamLeaders !== undefined
        ? this.props.teamLeaders.pop()
        : null;

    return (
      <div className="team-page-container">
        <div className="team-header">
          <div className="team-page-name">
            <img src={teamImg} alt="logo" className="team-page-image" />
            <div className="team-page-name"> {teamName}</div>
          </div>
        </div>

        <div className="team-page-cards">
          {teamLeaders && allPlayers !== undefined ? (
            <TeamLeadersCard
              teamLeaders={teamLeaders}
              allPlayers={allPlayers}
            />
          ) : null}
          {teamStats !== undefined ? (
            <TeamStatsCard teamStats={teamStats} teamId={teamId} />
          ) : null}

          <TeamScheduleCard teamId={teamId} />
        </div>
        <div className="team-roster-header">Team Roster</div>
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
  {
    fetchTeamStats,
    fetchTeamLeaders,
    fetchTeams,
    fetchPlayers
  }
)(TeamPage);
