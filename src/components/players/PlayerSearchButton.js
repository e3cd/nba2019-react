import React, { Component } from "react";
import { fetchPlayers, fetchPlayerStats } from "./../../actions";
import { connect } from "react-redux";
import { endpointConstants } from "./../../api/endpoints";
import { AutoComplete, Input, Icon } from "antd";
import "./PlayerSearchButton.css";

const Option = AutoComplete.Option;

class PlayerSearchButton extends Component {
  state = { dataSource: [] };

  componentDidMount() {
    this.props.fetchPlayers();
  }

  getPlayerStats = personId => {
    this.props.fetchPlayerStats(personId);
  };

  handleSearch = input => {
    this.setState({
      dataSource: !input
        ? []
        : this.props.players.map(({ firstName, lastName, personId }) => (
            <Option key={personId} value={firstName + lastName}>
              <img
                className="player-option-image"
                src={endpointConstants.FETCH_PLAYER_HEADSHOT(personId)}
              />
              <span className="player-option-label">
                {" "}
                {firstName + ` ` + lastName}{" "}
              </span>{" "}
            </Option>
          ))
    });
  };

  // handleSearch = value => {
  //   console.log(value);
  //   this.setState({
  //     dataSource: !value
  //       ? []
  //       : nba.searchPlayers(value).map(({ fullName, playerId }) => (
  //           <Option key={playerId} value={fullName}>
  //             <img
  //               className="player-option-image"
  //               src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
  //             />{" "}
  //             <span className="player-option-label"> {fullName} </span>{" "}
  //           </Option>
  //         ))
  //   });
  // };

  render() {
    console.log(this.props.players);
    // let aminu = this.getPlayerStats(1626246);
    // console.log(this.props.playerStats);

    // const options = [
    //   { value: "chocolate", label: "Chocolate" },
    //   { value: "strawberry", label: "Strawberry" },
    //   { value: "vanilla", label: "Vanilla" }
    // ];
    const { dataSource } = this.state;
    console.log(dataSource);
    return (
      <div className="search-bar">
        <AutoComplete
          className="search-field"
          size="large"
          dataSource={dataSource}
          // onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder="Search for an NBA Player"
          optionLabelProp="value"
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { players: state.players[0], playerStats: state.playerStats[0] };
};

export default connect(
  mapStateToProps,
  { fetchPlayers, fetchPlayerStats }
)(PlayerSearchButton);
