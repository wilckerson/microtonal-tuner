import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Tuner from "../components/Tuner";
import TunerBar from "../components/TunerBar";
import TunerGauge from "../components/TunerGauge";

function Home() {
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
      {/* <TunerGauge /> */}
      {/* <TunerBar /> */}
    </div>
  );
}

export default Home;
