import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";
import LocalData from "../core/LocalData";
import { TuningData } from "../core/TuningMath";

function TuningList() {
  const history = useHistory();

  const tuningListData = LocalData.getTuningList();
  const handleClick = (index: number) => {
    LocalData.setCurrentTuningIndex(index);
    history.goBack();
  };
  return (
    <div>
      <TopBar title="Choose your tuning" />
      <Container maxWidth="sm">
        <List component="nav">
          {tuningListData.map((item, index) => (
            <>
              <ListItem
                key={`${index}-${item?.name}`}
                button
                onClick={() => handleClick(index)}
              >
                <Box p={1}>{item.name}</Box>
                {/* <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="more">
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction> */}
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TuningList;
