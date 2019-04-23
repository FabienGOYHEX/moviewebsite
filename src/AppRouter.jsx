import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Search-results" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
