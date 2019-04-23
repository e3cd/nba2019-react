import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import PlayerProfile from "./players/PlayerProfile";
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
            <Route path="/players/:id" exact component={PlayerProfile} />
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
