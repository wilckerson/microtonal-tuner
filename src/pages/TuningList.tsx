import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/ui/TopBar";
import LocalData from "../core/LocalData";
import { TuningData } from "../core/TuningMath";
import AddIcon from "@mui/icons-material/Add";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import { useState } from "react";
import { useEffect } from "react";

function TuningList() {
  const navigate = useNavigate();
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
    navigate(-1);
  };

  function handleAddTuning() {
    navigate("/saveTuning");
  }

  function handleEditTuning(tuningId: string) {
    navigate(`/saveTuning/${tuningId}`);
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

  const getItemSecondaryAction = (item: TuningData) => (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            edge="end"
            aria-label="more"
            {...bindTrigger(popupState)}
            size="large"
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
  );

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
              <ListItem
                secondaryAction={getItemSecondaryAction(item)}
                disablePadding
              >
                <ListItemButton onClick={() => handleClick(index)}>
                  <Box p={1}>{item.name}</Box>
                </ListItemButton>
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
