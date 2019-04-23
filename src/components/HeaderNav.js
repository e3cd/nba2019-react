import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./HeaderNav.css";

class HeaderNav extends Component {
  state = { value: 0 };

  // componentDidCatch() {
  //   this.activeTab();
  // }

  // activeTab() {
  //   if (this.props.location.pathname === "/") {
  //     return `btn-acti`;
  //   } else if (this.props.location.pathname === "/Players") {
  //     this.setState({ value: 1 });
  //   } else if (this.props.location.pathname === "Teams") {
  //     this.setState({ value: 2 });
  //   }
  // }

  render() {
    return (
      <nav className="nav">
        <div className="nav-title">2019 NBA SEASON STATS</div>
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
