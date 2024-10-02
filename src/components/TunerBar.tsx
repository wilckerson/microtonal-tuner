import { useEffect, useState } from "react";
import { Box, Grid, Slider, Tooltip, Typography } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

const thumbSize = 24;
const useStyles = makeStyles({
  sliderTrack: {
    color: "#aaa",
  },
  sliderRail: {
    color: "#aaa",
    opacity: 1,
  },
  sliderThumb: {
    borderRadius: 3,
    width: 7,
    height: thumbSize,
    marginTop: 1 - Math.floor(thumbSize / 2),
  },
});

function ValueLabelComponent(props: any) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      placement="top"
      title={Math.floor(value) + " cents"}
      color="primary"
    >
      {children}
    </Tooltip>
  );
}

function TunerBar() {
  const classes = useStyles();
  var [slideValue, setSlideValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      var randValue = Math.random() * 200 - 100;
      setSlideValue(randValue);
    }, 2000);
  }, []);

  const marks = [
    {
      value: 0,
      //label: "C#",
    },
    // {
    //   value: -100,
    //   //label: "C",
    // },
    // {
    //   value: 100,
    //   //label: "D",
    // },

    // {
    //   value: 5,
    //   //label: "37°C",
    //},
  ];

  return (
    <Box p={3}>
      <Slider
        value={slideValue}
        marks={marks}
        min={-100}
        max={100}
        classes={{
          track: classes.sliderTrack,
          thumb: classes.sliderThumb,
          rail: classes.sliderRail,
        }}
        valueLabelDisplay="on"
        slots={{
          valueLabel: ValueLabelComponent,
        }}
        disabled
        //valueLabelFormat={(value) => value + " cents"}
      />
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6"> C</Typography>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="center">
            <Typography variant="h4"> C#</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box textAlign="right">
            <Typography variant="h6"> D</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TunerBar;
