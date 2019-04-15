import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import PlayerStats from "./players/PlayerStats";
import PlayerSearch from "./players/PlayerSearch";
import StandingsPage from "./standings/StandingsPage";
import TeamsList from "./teams/TeamsList";
import TeamStats from "./teams/TeamStats";
import history from "../history";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <HeaderNav />
        <div className="app-container">
          <Switch>
            <Route path="/" exact component={StandingsPage} />
            <Route path="/players/:id" exact component={PlayerStats} />
            <Route path="/players/" exact component={PlayerSearch} />
            <Route path="/teams/" exact component={TeamsList} />
            <Route path="/teams/:id" exact component={TeamStats} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
