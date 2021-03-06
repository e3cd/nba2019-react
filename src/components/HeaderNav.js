import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./HeaderNav.css";

class HeaderNav extends Component {
  state = { value: 0 };

  render() {
    return (
      <nav className="nav">
        <div className="nav-title">2019 NBA SEASON</div>
        <ul className="nav-list">
          <Link to="/" style={{ textDecoration: "none" }} className="nav-item">
            <li className="nav-link">Standings</li>
          </Link>
          <Link
            to="/Players"
            style={{ textDecoration: "none" }}
            className="nav-item"
          >
            <li className="nav-link">Players</li>
          </Link>
          <Link
            to="/Teams"
            style={{ textDecoration: "none" }}
            className="nav-item"
          >
            <li className="nav-link">Teams</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
