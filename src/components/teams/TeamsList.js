import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "./../../actions/index";
import { Link } from "react-router-dom";
import { endpointConstants } from "./../../api/endpoints";
import { withRouter } from "react-router";
import "./TeamsList.css";

class TeamsList extends Component {
  componentDidMount() {
    this.props.fetchTeams();
  }

  renderTeamList = list => {
    return list
      ? list.map(team => {
          // const teamName = this.getTeamName(player.teamId).fullName;

          const logoImg = endpointConstants.TEAM_LOGO(team.tricode);
          // const playerImg = endpointConstants.FETCH_PLAYER_HEADSHOT(
          //   player.personId
          // );

          const teamImageStyle = {
            maxWidth: "100%",
            height: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center"
          };

          const teamStatsUrl = `teams/${team.teamId}`;

          return (
            <Link to={teamStatsUrl} className="team-link">
              <div className="team-cards-container">
                <img src={logoImg} alt="scrub team" style={teamImageStyle} />

                <div className="team-label">{team.fullName}</div>
              </div>
            </Link>
          );
        })
      : null;
  };

  render() {
    console.log(this.props.teams[0]);
    const teamList = this.props.teams[0];
    return (
      <div className="team-list-container">
        {teamList !== undefined ? this.renderTeamList(teamList) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(withRouter(TeamsList));
