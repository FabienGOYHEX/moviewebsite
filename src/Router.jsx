import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Filmlist from "./Filmlist";
import HomePage from "./HomePage";
import PlayingNowList from "./PlayingNowList";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Popular-Films" component={Filmlist} />
      <Route exact path="/Now-playing" component={PlayingNowList} />
    </Router>
  );
}

export default AppRouter;
