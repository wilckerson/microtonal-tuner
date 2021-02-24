import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Tuning from "./pages/Tuning";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tuning">
          <Tuning />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
