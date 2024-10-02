import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootNote from "./pages/RootNote";
import TuningList from "./pages/TuningList";
import SaveTuning from "./pages/SaveTuning";
import TuningRedirect from "./pages/TuningRedirect";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
