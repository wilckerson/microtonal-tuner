import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";

function RootNote() {
  const history = useHistory();
  return (
    <div>
      <TopBar title="Choose the root note" />
      <Container maxWidth="sm">
        <p>
          Choose the root note frequency used as starting point to tuning the
          other notes. Usually it is setted to A = 440Hz (Pitch Stardard).
        </p>
      </Container>
    </div>
  );
}

export default RootNote;
