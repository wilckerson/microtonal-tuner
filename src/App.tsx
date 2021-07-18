import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import RootNote from "./pages/RootNote";
import TuningList from "./pages/TuningList";
import SaveTuning from "./pages/SaveTuning";
import TuningRedirect from "./pages/TuningRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tuning/:tuningName">
          <TuningRedirect />
        </Route>
        <Route path="/tuningList">
          <TuningList />
        </Route>
        <Route path="/rootNote">
          <RootNote />
        </Route>
        <Route path="/saveTuning/:tuningId?" component={SaveTuning} />
      </Switch>
    </Router>
  );
}

export default App;
