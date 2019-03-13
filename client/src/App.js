import React, { Component } from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Results from "./containers/Results";
import Favorites from "./containers/Favorites";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </div>
    );
  }
}

export default App;
