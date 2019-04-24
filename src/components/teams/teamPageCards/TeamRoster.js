import React, { Component } from "react";
import { endpointConstants } from "./../../../api/endpoints";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./TeamRoster.css";

class TeamRoster extends Component {
  getTeamName = teamId => {
    // console.log(this.props.teams);
    return this.props.getTeams.find(team => team.teamId === teamId);
  };

  fetchRoster = teamId => {
    return this.props.allPlayers.filter(player => player.teamId == teamId);
  };

  renderRoster = roster => {
    return roster.map(player => {
      const playerStatsUrl = `players/${player.personId}`;
      //   const teamLogo = this.getTeamName(player.teamId).tricode;
      const logoImg = this.props.teamImg;
      const playerImg = endpointConstants.FETCH_PLAYER_HEADSHOT(
        player.personId
      );

      const playerImageStyle = {
        backgroundImage: `linear-gradient(
                rgba(252,252,252,0.6),
                rgb(254, 254, 254,0.7)
              ), url(${logoImg}) `,
        maxWidth: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center"
      };

      return (
        <Link to={playerStatsUrl} className="player-link">
          <div className="player-cards-container">
            <img src={playerImg} alt="scrub" style={playerImageStyle} />

            <div className="player-label">{player.fullName}</div>
          </div>
        </Link>
      );
    });
  };

  render() {
    const fetchedRoster = this.fetchRoster(this.props.teamId);
    return (
      <div className="roster-container">{this.renderRoster(fetchedRoster)}</div>
    );
  }
}

export default withRouter(TeamRoster);
