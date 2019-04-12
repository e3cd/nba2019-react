import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderNav from "./header/HeaderNav";
import PlayerStats from "./players/PlayerStats";
import PlayerSearch from "./players/PlayerSearch";
import StandingsPage from "./standings/StandingsPage";
import TeamsList from "./teams/TeamsList";
import TeamStats from "./teams/TeamStats";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderNav />
            <Switch>
              <Route path="/" exact component={StandingsPage} />
              <Route path="/players/:id" exact component={PlayerStats} />
              <Route path="/players/" exact component={PlayerSearch} />
              <Route path="/teams/" exact component={TeamsList} />
              <Route path="/teams/:id" exact component={TeamStats} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
