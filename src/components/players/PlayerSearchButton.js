import React, { Component } from "react";
import PlayerResultsList from "./PlayerResultsList";
import "./PlayerSearchButton.css";

class PlayerSearchButton extends Component {
  state = { searchInput: "" };

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
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

        <PlayerResultsList
          getPlayers={this.props.getPlayers}
          searchTerm={this.state.searchInput}
          getTeams={this.props.getTeams}
        />
      </div>
    );
  }
}

export default PlayerSearchButton;
