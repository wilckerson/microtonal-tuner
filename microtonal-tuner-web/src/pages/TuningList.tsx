import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";

function TuningList() {
  const history = useHistory();
  return (
    <div>
      <TopBar title="Choose your tuning" />
      <Container maxWidth="sm">Tuning page</Container>
    </div>
  );
}

export default TuningList;
