import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { useHistory } from "react-router-dom";

function Tuning() {
  const history = useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Choose your tuning</Typography>
        </Toolbar>
      </AppBar>
      Tuning page
    </div>
  );
}

export default Tuning;
