import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import TunerGauge from "./TunerGauge";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FrequencyAnalyzer from "../core/FrequencyAnalyzer";
import { useHistory } from "react-router-dom";
import TunerAnalyzer, { TuningData } from "../core/TunerAnalyzer";
import { makeStyles } from "@material-ui/core/styles";
import TuningMath from "../core/TuningMath";
import LocalData from "../core/LocalData";

const useStyles = makeStyles({
  tunedNote: {
    color: "green",
    textShadow: "3px 3px 12px green",
  },
});

function Tuner(props: any) {
  const classes = useStyles();

  const [centsOff, setCentsOff] = useState<number>(0);
  const [noteName, setNoteName] = useState<string>("");
  const [rootFreq, setRootFreq] = useState<number>(LocalData.getRootNote());
  const [frequency, setFrequency] = useState<number>(0);
  const history = useHistory();

  useEffect(() => {
    const analyzer = new FrequencyAnalyzer((freq: number) => {
      setFrequency(freq);

      var tuningData = TunerAnalyzer.get12EdoData(rootFreq);
      if (tuningData !== undefined) {
        var noteInfo = TunerAnalyzer.analyzeFrequency(
          tuningData,
          freq,
          rootFreq
        );
        console.log("noteInfo", noteInfo);

        setCentsOff(noteInfo.centsOff);
        setNoteName(noteInfo.noteName);
      }
    });
    analyzer.start();

    return () => {
      analyzer.stop();
    };
  }, [rootFreq]);

  const noteStyle =
    Math.abs(centsOff) <= TuningMath.JND_CENTS ? classes.tunedNote : undefined;

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
              12EDO
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption">Root note</Typography>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              style={{ textTransform: "none" }}
              onClick={() => history.push("/rootNote")}
            >
              {rootFreq} Hz
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
                <Typography variant="h3" className={noteStyle}>
                  {noteName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="right">
                <Typography variant="subtitle2">
                  {centsOff.toFixed(0)} cents
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <TunerGauge value={centsOff} />
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
