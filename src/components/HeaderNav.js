import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css";

class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }} className="nav-item">
            <li>Standings</li>
          </Link>
          <Link
            to="/Players"
            style={{ textDecoration: "none" }}
            className="nav-item"
          >
            <li>Players</li>
          </Link>
          <Link
            to="/Teams"
            style={{ textDecoration: "none" }}
            className="nav-item"
          >
            <li>Teams</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
