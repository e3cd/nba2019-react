import React, { Component } from "react";
import { endpointConstants } from "./../../../api/endpoints";
import "./PlayerInfoCard.css";

class PlayerInfoCard extends Component {
  getTeamName = teamId => {
    return this.props.teams.find(team => team.teamId === teamId);
  };

  getPosition = position => {
    if (position === "G") {
      return "Guard";
    } else if (position === "F") {
      return "Foward";
    } else if (position === "C") {
      return "Center";
    } else if (position === "G-F") {
      return "Guard/Foward";
    } else if (position === "F-C" || "C-F") {
      return "Foward/Center";
    }
  };

  prevAffiliation = list => {
    return list.collegeName === "" ? `Previous Team` : `College`;
  };

  isDrafted = list => {
    return list.draft.teamId === ""
      ? `Undrafted`
      : list.draft.seasonYear +
          " Round " +
          list.draft.roundNum +
          " - Pick " +
          list.draft.pickNum +
          ` (${this.getTeamName(list.draft.teamId).tricode})`;
  };

  getCollege = list => {
    return list.collegeName === "" ? list.lastAffiliation : list.collegeName;
  };

  renderInfo = list => {
    return list ? (
      <div>
        <h1 className="info-title">{list.firstName + " " + list.lastName}</h1>
        <div className="info-image">
          <img
            src={endpointConstants.FETCH_PLAYER_HEADSHOT(list.personId)}
            alt="scrub"
            style={{
              backgroundImage: `linear-gradient(
            rgba(252,252,252,0.6),
            rgb(254, 254, 254,0.7)
          ), url(${endpointConstants.TEAM_LOGO(
            this.getTeamName(list.teamId).tricode
          )})`,
              maxWidth: `100%`,
              height: `auto`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              borderRadius: "20px"
            }}
          />
        </div>

        <ul className="info-label">
          <li>{this.getTeamName(list.teamId).fullName}</li>
          <li>{this.getPosition(list.pos)}</li>
          <li>#{list.jersey}</li>
        </ul>
        <div className="info-list">
          <div className="info-values">
            <div>
              <b>Date Of Birth:</b>
            </div>
            <div>
              <b>Country:</b>
            </div>
            <div>
              <b>Height/Weight:</b>
            </div>

            <div>
              <b>{this.prevAffiliation(list)}:</b>
            </div>
            <div>
              <b>Draft Info:</b>
            </div>
          </div>
          <div className="info-values">
            <div>{list.dateOfBirthUTC}</div>
            <div>{list.country}</div>
            <div>
              {list.heightFeet + "'" + list.heightInches} - {list.weightPounds}
            </div>
            <div>{this.getCollege(list)}</div>
            <div>{this.isDrafted(list)}</div>
          </div>
        </div>
      </div>
    ) : null;
  };

  render() {
    const info = this.props.info;

    return <div className="info-card">{this.renderInfo(info)}</div>;
  }
}

export default PlayerInfoCard;
