import React, { Component } from "react";
import { connect } from "react-redux";
import { endpointConstants } from "./../../../api/endpoints/index";
// import { bindActionCreators } from "redux";
import { fetchTeamSchedule, fetchTeams } from "./../../../actions/index";
import "./TeamScheduleCard.css";

class TeamScheduleCard extends Component {
  componentDidMount() {
    this.props.fetchTeamSchedule(this.props.teamId);
    this.props.fetchTeams();
  }

  getTeamName = teamId => {
    return this.props.teams.find(team => team.teamId === teamId);
  };

  render() {
    const schedule = this.props.teamSchedule.pop();
    const regularSchedule =
      schedule !== undefined
        ? schedule
            .filter(game => game.seasonStageId !== 1)
            .filter(game => game.statusNum === 3)
        : null;

    return (
      <div className="team-schedule-card">
        <h1 style={{ textAlign: "center" }}>Team Schedule</h1>

        {regularSchedule !== null
          ? regularSchedule
              .slice(regularSchedule.length - 8)
              .reverse()
              .map(game => {
                const { hTeam, vTeam, isHomeTeam } = game;
                const { teamId } = this.props;
                const homeScore = Math.floor(hTeam.score);
                const awayScore = Math.floor(vTeam.score);

                console.log(game);

                let results = () => {
                  if (isHomeTeam === true && homeScore > awayScore) {
                    return `W ${homeScore} - ${awayScore}`;
                  } else if (isHomeTeam === true && homeScore < awayScore) {
                    return `L ${awayScore} - ${homeScore}`;
                  } else if (isHomeTeam === false && awayScore > homeScore) {
                    return `W ${awayScore} - ${homeScore}`;
                  } else if (isHomeTeam === false && awayScore < homeScore) {
                    return `L ${homeScore} - ${awayScore}`;
                  }
                };
                const result = results();

                const oppId = isHomeTeam ? vTeam.teamId : hTeam.teamId;
                const oppLogo = endpointConstants.TEAM_LOGO(
                  this.getTeamName(oppId).tricode
                );
                const oppTeam = this.getTeamName(oppId).fullName;

                const venue = hTeam.teamId === teamId ? "vs" : "@";

                return (
                  <div className="team-schedule-list">
                    <div>
                      <img
                        src={oppLogo}
                        alt="opponent logo"
                        className="opponent-logo"
                      />
                    </div>

                    <div>
                      {venue} {oppTeam}
                    </div>
                    <div>{result}</div>
                  </div>
                );
              })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamSchedule: state.teamSchedule,
    teams: state.teams[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchTeamSchedule, fetchTeams }
)(TeamScheduleCard);
