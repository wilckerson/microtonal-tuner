import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/ui/TopBar";
import LocalData from "../core/LocalData";

function RootNote() {
  const navigate = useNavigate();
  const [rootNoteValue, setRootNoteValue] = useState(LocalData.getRootNote());

  const handleSave = () => {
    if (!rootNoteValue || rootNoteValue <= 0) {
      return;
    }

    LocalData.setRootNote(rootNoteValue);
    navigate(-1);
  };

  return (
    <div>
      <TopBar title="Choose the root note" />
      <Container maxWidth="sm">
        <p>
          Choose the root note frequency used as starting point to tuning the
          other notes. Usually it is setted to A = 440Hz (Pitch Stardard).
        </p>
        <Box my={3} textAlign="center">
          <TextField
            label="Root note"
            variant="outlined"
            type="number"
            inputProps={{
              step: "0.1",
              min: 20,
              max: 20000,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">Hz</InputAdornment>,
            }}
            value={rootNoteValue}
            onChange={(e) => setRootNoteValue(parseFloat(e.target.value) || 0)}
          />
        </Box>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSave}
        >
          Save
        </Button>
      </Container>
    </div>
  );
}

export default RootNote;
