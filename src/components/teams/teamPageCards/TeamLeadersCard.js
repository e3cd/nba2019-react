import React, { Component } from "react";
import "./TeamLeadersCard.css";

class TeamLeadersCard extends Component {
  getPlayerName = personId => {
    return this.props.allPlayers !== undefined
      ? this.props.allPlayers.find(player => player.personId === personId)
      : null;
  };

  //   getTeam = teamId => {
  //     return this.props.teams !== undefined
  //       ? this.props.teams.find(team => team.teamId === teamId)
  //       : null;
  //   };

  render() {
    const teamLeaders = this.props.teamLeaders;
    // console.log(teamLeaders);
    // console.log(this.props.allPlayers);
    // console.log(this.getPlayerName(teamLeaders.ppg[0].personId).firstName);

    const players = this.props.allPlayers;
    // console.log(players);
    // console.log(this.props.getTeams);

    //make a new array with fullName of each player
    const newPlayers = !players
      ? []
      : players.forEach(
          player => (player.fullName = player.firstName + " " + player.lastName)
        );

    // console.log(players);
    return (
      <div className="team-leaders-card">
        {/* <h1>
          {this.getPlayerName(teamLeaders.ppg[0].personId)
            .temporaryDisplayName.replace(",", " ")
            .reverse()}
        </h1> */}
        {/* <h1>{teamLeaders.ppg[0].personId}</h1>
        <h1>{teamLeaders.ppg[0].value}</h1> */}
      </div>
    );
  }
}

export default TeamLeadersCard;
