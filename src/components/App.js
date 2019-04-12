import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import PlayerStats from "./players/PlayerStats";
import PlayerSearch from "./players/PlayerSearch";
import StandingsPage from "./standings/StandingsPage";
import TeamsList from "./teams/TeamsList";
import TeamStats from "./teams/TeamStats";

import "./App.css";
import { Grid } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
