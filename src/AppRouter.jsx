import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewHomePage from "./NewHomePage";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewHomePage} />
        <Route exact path="/movies/search/:query" component={( { match }) => <div>{match.params.query}</div>} />
        <Route exact path='/movies/:id' component={( { match }) => <div>{match.params.id}</div>} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
