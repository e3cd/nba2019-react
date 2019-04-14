import React, { Component } from "react";
import { fetchStandings } from "./../../actions/index";
import { connect } from "react-redux";

class StandingsPage extends Component {
  componentDidMount() {
    this.props.fetchStandings();
    console.log(this.props);
  }

  render() {
    return <div>StandingsPage</div>;
  }
}

// const mapStateToProps = state => {
//   return {
//     standings: this.stats
//   }
// }

export default connect(
  null,
  { fetchStandings }
)(StandingsPage);
