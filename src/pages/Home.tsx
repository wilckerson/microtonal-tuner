import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Permission from "../components/Permission";
import Tuner from "../components/Tuner";
import HeaderMenu from "../components/HeaderMenu";
import pkg from "../../package.json";

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
          <Grid container alignItems="center">
            <Grid item md={4} xs={1}></Grid>
            <Grid item md={4} xs={10}>
              <Box textAlign="center">
                <Typography variant="h6" display="inline">
                  Microtonal Tuner
                </Typography>
                &nbsp;
                <Typography variant="caption">v{pkg.version}</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={1}>
              <Box display="flex" justifyContent="flex-end">
                <HeaderMenu />
              </Box>
            </Grid>
          </Grid>
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
