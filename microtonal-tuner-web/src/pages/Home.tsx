import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Permission from "../components/Permission";
import Tuner from "../components/Tuner";
//import TunerBar from "../components/TunerBar";
//import TunerGauge from "../components/TunerGauge";

function Home() {
  const isMicAlreadyAllowed = !!(window as any)["isMicAlreadyAllowed"];

  const [micAllowed, setMicAllowed] = useState(isMicAlreadyAllowed);
  function handleAllow() {
    setMicAllowed(true);
    (window as any)["isMicAlreadyAllowed"] = true;
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Box textAlign="center" style={{ width: "100%" }}>
            <Typography variant="h6">Microtonal Tuner</Typography>
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        {!micAllowed && <Permission onAllow={handleAllow} />}
        {micAllowed && <Tuner />}
      </Container>
    </div>
  );
}

export default Home;
