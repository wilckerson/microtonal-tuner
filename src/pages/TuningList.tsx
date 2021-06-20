import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../components/ui/TopBar";
import LocalData from "../core/LocalData";
import { TuningData } from "../core/TuningMath";
import AddIcon from "@material-ui/icons/Add";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import { useState } from "react";
import { useEffect } from "react";

function TuningList() {
  const history = useHistory();
  const [showRemoveConfirmDialog, setShowRemoveConfirmDialog] = useState(false);
  const [tuningId, setTuningId] = useState<string>("");
  const [tuningListData, setTuningListData] = useState<TuningData[]>();

  useEffect(() => {
    populateList();
  }, []);

  function populateList() {
    setTuningListData(LocalData.getTuningList());
  }

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

  function handleOnCloseDialog() {
    setTuningId("");
    setShowRemoveConfirmDialog(false);
  }

  function handleRemoveTuning(tuningId: string) {
    setTuningId(tuningId);
    setShowRemoveConfirmDialog(true);
  }

  function handleConfirmRemoveTuning() {
    LocalData.removeTuning(tuningId);

    setTuningId("");
    setShowRemoveConfirmDialog(false);

    populateList();
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
          {(tuningListData || []).map((item, index) => (
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
                          <MenuItem
                            onClick={() => {
                              popupState.close();
                              handleEditTuning(item.id);
                            }}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              popupState.close();
                              handleRemoveTuning(item.id);
                            }}
                          >
                            Remove
                          </MenuItem>
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

      <ConfirmDialog
        open={showRemoveConfirmDialog}
        onClose={handleOnCloseDialog}
        title="Are you sure want to remove this tuning?"
        onConfirm={handleConfirmRemoveTuning}
      />
    </div>
  );
}

export default TuningList;
