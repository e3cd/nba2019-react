import React, { Component } from "react";
import { endpointConstants } from "./../../../api/endpoints";
import "./TeamLeadersCard.css";

class TeamLeadersCard extends Component {
  getPlayerName = personId => {
    return this.props.allPlayers.find(player => player.personId === personId);
  };

  //   renderTeamLeaders = (list, stat) => {
  //     // const playerImg = endpointConstants.FETCH_PLAYER_HEADSHOT(player.personId);

  //     // const playerImageStyle = {
  //     //   // backgroundImage: `linear-gradient(
  //     //   //         rgba(252,252,252,0.6),
  //     //   //         rgb(254, 254, 254,0.7)
  //     //   //       ), url(${logoImg}) `,
  //     //   maxWidth: "100%",
  //     //   height: "auto",
  //     //   backgroundSize: "cover",
  //     //   backgroundPosition: "center"
  //     // };

  //     return (
  //       <div className="player-cards-container">
  //         <li key={stat}>{list[0].stat[0].value}</li>;
  //       </div>
  //     );
  //   };

  render() {
    const teamLeaders = this.props.teamLeaders;
    console.log(teamLeaders);
    // const players = this.props.allPlayers;
    // console.log(players);

    console.log(this.getPlayerName(teamLeaders.ppg[0].personId).fullName);
    console.log(teamLeaders.ppg[0].value);

    const stats = ["ppg", "trpg", "apg", "spg", "bpg"];

    return (
      <div className="team-leaders-card">
        {stats.map(stat => {
          console.log(teamLeaders[stat][0].value);
          const leadPlayer = this.getPlayerName(teamLeaders[stat][0].personId)
            .fullName;
          const leadStat = teamLeaders[stat][0].value;
          const playerImg = endpointConstants.FETCH_PLAYER_HEADSHOT(
            teamLeaders[stat][0].personId
          );

          return (
            <div>
              <img src={playerImg} alt="stat leader" />
              <h1>{leadPlayer}</h1>
              <h1>{leadStat}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TeamLeadersCard;
