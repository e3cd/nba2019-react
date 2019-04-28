import React, { Component } from "react";
import _ from "underscore";
import { endpointConstants } from "./../../../api/endpoints";
import "./TeamLeadersCard.css";

//wizards, timberwolves, heat, cavs, pelicans, do not work becuase no data

class TeamLeadersCard extends Component {
  getPlayerName = personId => {
    return this.props.allPlayers.find(player => player.personId === personId);
  };

  render() {
    const teamStatLeaders = this.props.teamLeaders;
    console.log(_.isEmpty(teamStatLeaders.ppg));
    // const players = this.props.allPlayers;
    // console.log(players);

    // console.log(this.getPlayerName(teamLeaders.ppg[0].personId).fullName);
    // console.log(teamLeaders.ppg[0].value);

    const stats = ["ppg", "trpg", "apg", "spg", "bpg"];

    return (
      <div className="team-leaders-card">
        <h1>Stat Leaders</h1>
        {!_.isEmpty(teamStatLeaders.ppg)
          ? stats.map(stat => {
              //   console.log(teamLeaders[stat][0].value);
              //   console.log(stat);
              const leadPlayer = this.getPlayerName(
                teamStatLeaders[stat][0].personId
              ).fullName;
              const leadStat = teamStatLeaders[stat][0].value;
              const playerImg = endpointConstants.FETCH_PLAYER_HEADSHOT(
                teamStatLeaders[stat][0].personId
              );
              const statName = stat.toUpperCase();

              const playerImageStyle = {
                maxWidth: "100%",
                height: "auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%"
              };

              return (
                <div className="team-leader" key={stat}>
                  <div className="leader-img">
                    <img
                      src={playerImg}
                      alt="stat leader"
                      style={playerImageStyle}
                    />
                  </div>
                  <div className="leader-labels">
                    <div className="stat-value">
                      <h1>{statName}</h1>
                      <h1 style={{ textAlign: "center" }}>{leadStat}</h1>
                    </div>
                    <div className="leader-name">{leadPlayer}</div>
                  </div>
                </div>
              );
            })
          : `Stats Currently Unavailable`}
      </div>
    );
  }
}

export default TeamLeadersCard;
