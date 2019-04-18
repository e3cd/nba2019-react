import React, { Component } from "react";
import PlayerResultsList from "./PlayerResultsList";
import "./PlayerSearchButton.css";

class PlayerSearchButton extends Component {
  state = { searchInput: "" };

  // getPlayerStats = personId => {
  //   this.props.fetchPlayerStats(personId);
  // };

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    // console.log(this.props.getPlayers);
    // console.log(this.state.term);
    return (
      <div>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-field"
            placeholder="Search for an NBA player"
            onChange={this.onInputChange}
            value={this.state.searchInput}
          />
        </div>
        <div className="results-container">
          <PlayerResultsList
            getPlayers={this.props.getPlayers}
            searchTerm={this.state.searchInput}
            getTeams={this.props.getTeams}
          />
        </div>
      </div>
    );
  }
}

export default PlayerSearchButton;
