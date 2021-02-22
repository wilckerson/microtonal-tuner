import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import TunerGauge from "../components/TunerGauge";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Tuner(props: any) {
  const [value, setValue] = useState<Number>(0);

  useEffect(() => {
    setInterval(() => {
      var randValue = Math.random() * 200 - 100;
      setValue(randValue);
    }, 2000);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="caption">Tuning</Typography>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              style={{ textTransform: "none" }}
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
              <Typography variant="subtitle1">130Hz</Typography>
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
    </Container>
  );
}

export default Tuner;
