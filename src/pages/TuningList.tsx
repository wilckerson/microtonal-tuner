import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";
import LocalData from "../core/LocalData";
import { TuningData } from "../core/TuningMath";
import AddIcon from "@material-ui/icons/Add";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function TuningList() {
  const history = useHistory();

  const tuningListData = LocalData.getTuningList();
  const handleClick = (index: number) => {
    LocalData.setCurrentTuningIndex(index);
    history.goBack();
  };

  function handleAddTuning() {
    history.push("/saveTuning");
  }

  function handleEditTuning(tuningId: string) {
    history.push(`/saveTuning/${tuningId}`);
  }

  return (
    <div>
      <TopBar title="Choose your tuning" />
      <Container maxWidth="sm">
        <Box mt={2}>
          <Button startIcon={<AddIcon />} onClick={handleAddTuning}>
            Add new tuning
          </Button>
        </Box>
        <List component="nav">
          {tuningListData.map((item, index) => (
            <React.Fragment key={`${index}-${item?.name}`}>
              <ListItem button onClick={() => handleClick(index)}>
                <Box p={1}>{item.name}</Box>
                <ListItemSecondaryAction>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <IconButton
                          edge="end"
                          aria-label="more"
                          {...bindTrigger(popupState)}
                        >
                          <MoreVertIcon />
                        </IconButton>

                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={() => handleEditTuning(item.id)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>Remove</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TuningList;
