import React, { Component } from "react";
import { endpointConstants } from "./../../api/endpoints";
import "./PlayerResultsList.css";

class PlayerResultsList extends Component {
  getTeamName = teamId => {
    // console.log(this.props.teams);
    return this.props.getTeams.find(team => team.teamId === teamId);
  };

  renderFilteredList = list => {
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

          return (
            <div>
              <div className="player-cards-container">
                <img
                  src={playerImg}
                  alt="player"
                  className="player-image"
                  style={playerImageStyle}
                />

                <div className="player-label">
                  <div className="player-name">{player.fullName}</div>
                  <div className="player-sublabel">
                    <div>
                      <img src={logoImg} alt="logo" className="team-logo" />
                    </div>
                    <div className="team-name">{teamName}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : null;
  };

  render() {
    //make new teams and player objects from actions to remove the SCRUB players and non-nba teams

    const players = this.props.getPlayers;
    console.log(players);
    console.log(this.props.getTeams);

    //make a new array with fullName of each player
    const newPlayers = !players
      ? []
      : players.forEach(
          player => (player.fullName = player.firstName + " " + player.lastName)
        );

    const searchTerm = this.props.searchTerm;
    // console.log(players);
    // console.log(this.props.getTeams);

    const search = (list, term) =>
      searchTerm.length < 2
        ? []
        : list.filter(player =>
            player.fullName.toLowerCase().includes(term.toLowerCase())
          );

    //use players instead of newPlayers for some reason
    const filteredPlayers = search(players, searchTerm);
    console.log(filteredPlayers);

    // let teamLogo = this.getTeamName(team.teamId).tricode;
    // let imgSrc = endpointConstants.TEAM_LOGO(teamLogo);

    return (
      <div className="results-container">
        {this.renderFilteredList(filteredPlayers)}
      </div>
    );
  }
}

export default PlayerResultsList;
