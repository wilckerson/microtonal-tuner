import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TunerGauge from "./TunerGauge";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FrequencyAnalyzer from "../core/FrequencyAnalyzer";
import { useNavigate } from "react-router-dom";
import TunerAnalyzer from "../core/TunerAnalyzer";
import makeStyles from "@mui/styles/makeStyles";
import TuningMath from "../core/TuningMath";
import LocalData from "../core/LocalData";

const useStyles = makeStyles({
  tunedNote: {
    color: "green",
    textShadow: "3px 3px 12px green",
  },
  htmlContent: {
    "& table td": {
      textAlign: "center",
    },
  },
});

function Tuner() {
  const classes = useStyles();

  const [centsOff, setCentsOff] = useState<number>(0);
  const [noteName, setNoteName] = useState<string>("");
  const [noteIndex, setNoteIndex] = useState<string>("");
  const [rootFreq] = useState<number>(LocalData.getRootNote());
  const [currentTuningIndex] = useState<number>(
    LocalData.getCurrentTuningIndex()
  );
  const [tuningName, setTuningName] = useState<string>("");
  const [tuningHelpContent, setTuningHelpContent] = useState<string>("");
  const [frequency, setFrequency] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    var tuningData = LocalData.getTuningList()[currentTuningIndex];
    setTuningName(tuningData?.name || "");
    setTuningHelpContent(tuningData?.helpContentHtml || "");

    const analyzer = new FrequencyAnalyzer((freq: number) => {
      setFrequency(freq);

      if (tuningData !== undefined) {
        var analyzedNote = TunerAnalyzer.analyzeFrequency(
          tuningData,
          freq,
          rootFreq
        );
        //console.log("analyzedNote", analyzedNote);

        setCentsOff(analyzedNote.centsOff);
        setNoteName(analyzedNote.noteName);
        setNoteIndex(analyzedNote.noteIndex.toString());
      }
    });
    analyzer.start();

    return () => {
      analyzer.stop();
    };
  }, [rootFreq, currentTuningIndex]);

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
              onClick={() => navigate("/tuningList")}
            >
              {tuningName}
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption">Root note</Typography>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              style={{ textTransform: "none" }}
              onClick={() => navigate("/rootNote")}
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
                <Typography
                  variant="h4"
                  className={noteStyle}
                  sx={{ display: { sm: "none", xs: "block" } }}
                >
                  {noteName || noteIndex}
                </Typography>

                <Typography
                  variant="h3"
                  className={noteStyle}
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {noteName || noteIndex}
                </Typography>

                {!!noteName && (
                  <Typography variant="body2">Index: {noteIndex}</Typography>
                )}
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
        <Box>
          <div
            className={classes.htmlContent}
            dangerouslySetInnerHTML={{ __html: tuningHelpContent }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Tuner;
