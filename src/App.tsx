import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import RootNote from "./pages/RootNote";
import Tuning from "./pages/TuningList";

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
        <Route path="/rootNote">
          <RootNote />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
