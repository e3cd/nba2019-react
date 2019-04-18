import React, { Component } from "react";
import { endpointConstants } from "./../../api/endpoints";

class PlayerResultsList extends Component {
  render() {
    const players = this.props.getPlayers;
    const searchTerm = this.props.searchTerm;
    console.log(players);
    // console.log(newListPlayers);

    const search = (list, term) =>
      !searchTerm
        ? []
        : list.filter(
            player =>
              player.lastName.toLowerCase().includes(term.toLowerCase()) ||
              player.firstName.toLowerCase().includes(term.toLowerCase())
          );

    const filteredPlayers = search(players, searchTerm);

    // console.log(filteredPlayers);

    return filteredPlayers.map(({ firstName, lastName, personId }) => (
      <div>
        <ul key={personId}>
          <li>
            <img
              src={endpointConstants.FETCH_PLAYER_HEADSHOT(personId)}
              alt="player"
            />
          </li>
          <li>{firstName + " " + lastName}</li>
        </ul>
      </div>
    ));
  }
}

export default PlayerResultsList;

// import React, { Component } from "react";
// import { endpointConstants } from "./../../api/endpoints";

// class PlayerResultsList extends Component {
//   render() {
//     // console.log(this.props.getPlayers);
//     // console.log(this.props.searchTerm);
//     const players = this.props.getPlayers;
//     const newPlayers = array => {
//       for (let i = 0; i < array.length; i++) {
//         array[i].temporaryDisplayName = array[i].temporaryDisplayName.replace(
//           ",",
//           ""
//         );
//       }
//       return array;
//     };
//     const newListPlayers = newPlayers(players);
//     const searchTerm = this.props.searchTerm;
//     console.log(newListPlayers);
//     //   filterPlayers = () => {
//     //     players
//     //       ? players.filter(player =>
//     //           player.temporaryDisplayName.includes(searchTerm.toLowerCase())
//     //         )
//     //       : players.filter(player =>
//     //           player.temporaryDisplayName.startsWith(searchTerm.toLowerCase())
//     //         );
//     //   };

//     const search = (list, term) =>
//       !searchTerm
//         ? []
//         : list.filter(newListPlayers =>
//             player.temporaryDisplayName
//               .toLowerCase()
//               .includes(term.toLowerCase())
//           );

//     const filteredPlayers = !newPlayers
//       ? []
//       : search(newListPlayers, searchTerm);

//     // console.log(filteredPlayers);

//     return filteredPlayers.map(({ firstName, lastName, personId }) => (
//       <div>
//         <ul key={personId}>
//           <li>
//             <img
//               src={endpointConstants.FETCH_PLAYER_HEADSHOT(personId)}
//               alt="player"
//             />
//           </li>
//           <li>{firstName + " " + lastName}</li>
//         </ul>
//       </div>
//     ));
//   }
// }

// export default PlayerResultsList;
