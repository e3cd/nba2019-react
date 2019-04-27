import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import PlayerProfile from "./players/PlayerProfile";
import PlayerSearch from "./players/PlayerSearch";
import StandingsPage from "./standings/StandingsPage";
import TeamsList from "./teams/TeamsList";
import TeamPage from "./teams/TeamPage";
// import history from "../history";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderNav />
        <div className="app-container">
          <Switch>
            <Route path="/" exact component={StandingsPage} />
            <Route path="/players/:id" exact component={PlayerProfile} />
            <Route path="/teams/players/:id" exact component={PlayerProfile} />
            <Route path="/players/" exact component={PlayerSearch} />
            <Route path="/teams/" exact component={TeamsList} />
            <Route path="/teams/:id" exact component={TeamPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
