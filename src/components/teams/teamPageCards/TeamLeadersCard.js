import React, { Component } from "react";
import "./TeamLeadersCard.css";

class TeamLeadersCard extends Component {
  getPlayerName = personId => {
    return this.props.allPlayers.find(player => player.personId === personId);
  };

  //   renderTeamLeaders = list => {

  //   }

  render() {
    const teamLeaders = this.props.teamLeaders;
    // console.log(teamLeaders);
    const players = this.props.allPlayers;
    // console.log(players);

    console.log(this.getPlayerName(teamLeaders.ppg[0].personId).fullName);
    console.log(teamLeaders.ppg[0].value);
    const STAT_NAME = {
      ppg: "PTS",
      trpg: "REB",
      apg: "AST",
      bpg: "BLK",
      spg: "STL"
    };
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
