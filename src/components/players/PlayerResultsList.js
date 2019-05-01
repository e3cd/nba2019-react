import React, { Component } from "react";
import { endpointConstants } from "./../../api/endpoints";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./PlayerResultsList.css";

class PlayerResultsList extends Component {
  getTeamName = teamId => {
    return this.props.getTeams.find(team => team.teamId === teamId);
  };

  renderFilteredList = (list, index) => {
    return list
      ? list.map(player => {
          const teamName = this.getTeamName(player.teamId).fullName;
          const teamLogo = this.getTeamName(player.teamId).tricode;
          const logoImg = endpointConstants.TEAM_LOGO(teamLogo);
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

          const playerStatsUrl = `players/${player.personId}`;

          return (
            <Link to={playerStatsUrl} className="player-link" key={index}>
              <div className="player-cards-container" key={playerImg}>
                <img src={playerImg} alt="no image" style={playerImageStyle} />

                <div className="player-label" key={player.fullName}>
                  <div className="player-name">{player.fullName}</div>
                  <div className="player-sublabel" key={teamName}>
                    <div>
                      <img src={logoImg} alt="logo" className="team-logo" />
                    </div>
                    <div className="team-name">{teamName}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      : null;
  };

  render() {
    //make new teams and player objects from actions to remove the SCRUB players and non-nba teams

    const players = this.props.getPlayers ? this.props.getPlayers : null;

    //make a new array with fullName of each player
    const newPlayers = !players
      ? []
      : players.forEach(
          player => (player.fullName = player.firstName + " " + player.lastName)
        );

    const searchTerm = this.props.searchTerm;

    const search = (list, term) =>
      searchTerm.length < 2
        ? []
        : list.filter(player =>
            player.fullName.toLowerCase().includes(term.toLowerCase())
          );

    //use players instead of newPlayers for some reason
    const filteredPlayers = search(players, searchTerm);

    return (
      <div className="results-container">
        {this.renderFilteredList(filteredPlayers)}
      </div>
    );
  }
}

export default withRouter(PlayerResultsList);
