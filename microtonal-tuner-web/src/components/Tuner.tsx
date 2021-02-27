import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import TunerGauge from "./TunerGauge";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FrequencyAnalyzer from "../core/FrequencyAnalyzer";
import { useHistory } from "react-router-dom";

function Tuner(props: any) {
  const [value, setValue] = useState<Number>(0);
  const [frequency, setFrequency] = useState<Number>(0);
  //const [analyzerInstance, setAnalyzerInstance] = useState<FrequencyAnalyzer>();
  const history = useHistory();

  useEffect(() => {
    const analyzer = new FrequencyAnalyzer(onFrequencyCallback);
    analyzer.start();
    //setAnalyzerInstance(analyzer);
  }, []);

  function onFrequencyCallback(freq: number) {
    console.log(freq);
    setFrequency(freq);

    //Node name
    //centsOff
  }

  return (
    <div>
      <Box pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="caption">Tuning</Typography>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              style={{ textTransform: "none" }}
              onClick={() => history.push("/tuning")}
            >
              22EDO
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption">Root note</Typography>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              style={{ textTransform: "none" }}
            >
              440 Hz
            </Button>
          </Grid>
        </Grid>

        {/* <Box textAlign="center" mt={5}>
          <Typography variant="h3">C#</Typography>
        </Box> */}
        <Box mt={4}>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Typography variant="subtitle1">
                {frequency.toFixed(2)}Hz
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="center">
                <Typography variant="h3">C#</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="right">
                <Typography variant="subtitle2">-8 cents</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <TunerGauge value={value} />
        {/* <Grid container>
          <Grid item xs={6}>
            <Typography variant="subtitle1">130Hz</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box textAlign="right">
              <Typography variant="subtitle2">-8 cents</Typography>
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
}

export default Tuner;
