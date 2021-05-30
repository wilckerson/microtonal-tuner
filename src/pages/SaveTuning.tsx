import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import React, { useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";
import LocalData from "../core/LocalData";
import TuningHelp from "../components/TuningHelp";

type TParams = { tuningId: string };
function SaveTuning({ match }: RouteComponentProps<TParams>) {
  const history = useHistory();
  const [typeValue, setTypeValue] = useState(0);

  const id = match.params.tuningId;

  const handleSave = () => {
    history.goBack();
  };

  return (
    <div>
      <TopBar title="New tuning" />
      <Container maxWidth="sm">
        <Box mt={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={typeValue}
              // onChange={handleChange}
              label="Type"
            >
              <MenuItem value={0}>Equal temperament</MenuItem>
              {/* <MenuItem value={1}>Custom tuning</MenuItem> */}
            </Select>
          </FormControl>
        </Box>

        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Number of divisions"
                variant="outlined"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Interval to divide"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center" mt={1}>
          <TuningHelp />
        </Box>

        <Box mt={3}>
          <TextField label="Name" variant="outlined" fullWidth />
        </Box>

        <Box mt={3}></Box>

        <Box mt={5} mb={1}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
        <Alert severity="info">
          <Typography variant="caption">
            All modifications and new tunings will be saved localy on this
            device only.
          </Typography>
        </Alert>
      </Container>
    </div>
  );
}

export default SaveTuning;
