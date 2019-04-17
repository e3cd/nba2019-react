import React, { Component } from "react";
import { endpointConstants } from "./../../api/endpoints";

class PlayerResultsList extends Component {
  render() {
    // console.log(this.props.getPlayers);
    // console.log(this.props.searchTerm);
    const players = this.props.getPlayers;
    const searchTerm = this.props.searchTerm;
    console.log(players);

    return <div>{searchTerm}</div>;
  }
}

export default PlayerResultsList;
