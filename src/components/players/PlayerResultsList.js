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
          let teamLogo = this.getTeamName(player.teamId).tricode;
          let imgSrc = endpointConstants.TEAM_LOGO(teamLogo);

          return (
            <div className="player-cards-container">
              <ul className="player-card">
                <li key={player.personId}>
                  <img
                    src={endpointConstants.FETCH_PLAYER_HEADSHOT(
                      player.personId
                    )}
                    alt="player"
                    className="player-card-image"
                  />
                </li>
                <li>{player.fullName}</li>

                <li>
                  <img src={imgSrc} alt="team logo" />
                </li>
              </ul>
            </div>
          );
        })
      : null;
  };

  render() {
    //make new teams and player objects from props to remove the SCRUB players and non-nba teams

    const players = this.props.getPlayers;
    console.log(players);

    const newPlayers = !players
      ? []
      : players.forEach(
          player => (player.fullName = player.firstName + " " + player.lastName)
        );

    // console.log(newPlayers);

    const teams = this.props.getTeams;
    console.log(teams);

    const newTeams = !teams
      ? []
      : teams.filter(team => team.isNBAFranchise === true);
    console.log(newTeams);

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

    return <div>{this.renderFilteredList(filteredPlayers)}</div>;
  }
}

export default PlayerResultsList;

// import React, { Component } from "react";
// import { endpointConstants } from "./../../api/endpoints";
// import "./PlayerResultsList.css";

// class PlayerResultsList extends Component {
//   getTeamName = teamId => {
//     // console.log(this.props.teams);
//     return this.props.getTeams.find(team => team.teamId === teamId);
//   };

//   render() {
//     const players = this.props.getPlayers;

//     const newPlayers = !players
//       ? []
//       : players.forEach(
//           player => (player.fullName = player.firstName + " " + player.lastName)
//         );

//     // console.log(newPlayers);

//     // console.log(this.props.getTeams);

//     const searchTerm = this.props.searchTerm;
//     // console.log(players);
//     // console.log(this.props.getTeams);

//     const search = (list, term) =>
//       searchTerm.length < 2
//         ? []
//         : list.filter(player =>
//             player.fullName.toLowerCase().includes(term.toLowerCase())
//           );

//     const filteredPlayers = search(players, searchTerm);

//     console.log(filteredPlayers);

//     return filteredPlayers.map(({ fullName, personId, teamId }) => (
//       <div className="player-cards-container">
//         <ul className="player-card">
//           <li key={personId}>
//             <img
//               src={endpointConstants.FETCH_PLAYER_HEADSHOT(personId)}
//               alt="player"
//               className="player-card-image"
//             />
//           </li>
//           <li>{fullName}</li>

//           <li>
//             <img
//               src={
//                 this.props.teams
//                   ? endpointConstants.TEAM_LOGO(
//                       this.getTeamName(teamId).tricode
//                     )
//                   : null
//               }
//               alt="team logo"
//             />
//           </li>
//         </ul>
//       </div>
//     ));
//   }
// }

// export default PlayerResultsList;
