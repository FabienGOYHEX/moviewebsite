import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MoviesResults from "./Components/MoviesResults";
import HomePage from "./HomePage";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/Components/MoviesResults" component={MoviesResults} />
    </Router>
  );
}

export default AppRouter;