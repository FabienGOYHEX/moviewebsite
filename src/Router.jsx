import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Filmlist from "./Filmlist";
import HomePage from "./HomePage";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Film-list" component={Filmlist} />
    </Router>
  );
}

export default AppRouter;
