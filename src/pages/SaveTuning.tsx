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
import TuningMath from "../core/TuningMath";
import { useEffect } from "react";

type TParams = { tuningId: string };
function SaveTuning({ match }: RouteComponentProps<TParams>) {
  const history = useHistory();
  const [tuningTypeValue, setTuningTypeValue] = useState(0);
  const [numDivisions, setNumDivisions] = useState(0);
  const [interval, setInterval] = useState(2);
  const [name, setName] = useState("");
  const [numDivisionsValidationError, setNumDivisionsValidationError] =
    useState("");
  const [intervalValidationError, setIntervalValidationError] = useState("");
  const [nameValidationError, setNameValidationError] = useState("");

  const tuningId = match.params.tuningId;

  useEffect(() => {
    populateTuning();
  }, []);

  const populateTuning = () => {
    if (!tuningId) {
      return;
    }

    var tuning = LocalData.getTuningById(tuningId);
    if (!tuning) {
      return;
    }

    setNumDivisions(tuning.notes.length);
    setInterval(tuning.base);
    setName(tuning.name || "");
  };

  const handleNumDivisionsChange = (value: string) => {
    const floatValue = parseFloat(value) || 0;
    setNumDivisions(floatValue);

    generateTuningName(floatValue, interval);
  };

  const handleIntervalChange = (value: string) => {
    const floatValue = parseFloat(value) || 0;
    setInterval(floatValue);

    generateTuningName(numDivisions, floatValue);
  };

  const generateTuningName = (
    numDivisionsValue: number,
    intervalValue: number
  ) => {
    if (numDivisionsValue > 0) {
      if (intervalValue === 2) {
        setName(`${numDivisionsValue}EDO`);
      } else if (intervalValue === 3) {
        setName(`${numDivisionsValue}EDT`);
      } else {
        setName(`${numDivisionsValue}ED${intervalValue}`);
      }
    }
  };

  const handleSave = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    let tuning = TuningMath.getEqualTemperamentData(
      numDivisions,
      interval,
      LocalData.getRootNote(),
      []
    );
    tuning.name = name;
    tuning.id = tuningId;
    LocalData.saveTuning(tuning);

    history.goBack();
  };

  const validateForm = () => {
    let validated = true;
    setNumDivisionsValidationError("");
    setIntervalValidationError("");
    setNameValidationError("");

    if (numDivisions <= 0) {
      setNumDivisionsValidationError("It must be greater than zero");
      validated = false;
    }

    if (interval <= 0) {
      setIntervalValidationError("It must be greater than zero");
      validated = false;
    }

    if (!name) {
      setNameValidationError("Type a name for this tuning.");
      validated = false;
    }

    return validated;
  };

  return (
    <div>
      <TopBar title={tuningId ? "Edit tuning" : "Add new tuning"} />
      <Container maxWidth="sm">
        <Box mt={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Tuning type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={tuningTypeValue}
              // onChange={handleChange}
              label="Tuning type"
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
                value={numDivisions}
                onChange={(event) =>
                  handleNumDivisionsChange(event.target.value)
                }
                error={!!numDivisionsValidationError}
                helperText={numDivisionsValidationError}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Interval to divide"
                variant="outlined"
                type="number"
                inputProps={{ step: 0.0001 }}
                fullWidth
                value={interval}
                onChange={(event) => handleIntervalChange(event.target.value)}
                error={!!intervalValidationError}
                helperText={intervalValidationError}
              />
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center" mt={1}>
          <TuningHelp />
        </Box>

        <Box mt={3}>
          <TextField
            label="Tuning name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={!!nameValidationError}
            helperText={nameValidationError}
          />
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
