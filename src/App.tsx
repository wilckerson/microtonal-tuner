import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootNote from "./pages/RootNote";
import TuningList from "./pages/TuningList";
import SaveTuning from "./pages/SaveTuning";
import TuningRedirect from "./pages/TuningRedirect";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuning/:tuningName" element={<TuningRedirect />} />
        <Route path="/tuningList" element={<TuningList />} />
        <Route path="/rootNote" element={<RootNote />} />
        <Route path="/saveTuning/:tuningId?" element={<SaveTuning />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
