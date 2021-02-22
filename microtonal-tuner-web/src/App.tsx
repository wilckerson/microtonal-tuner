import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Home from "./pages/Home";
import Tuner from "./pages/Tuner";
function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">Microtonal Tuner</Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Tuner />
    </div>
  );
}

export default App;
