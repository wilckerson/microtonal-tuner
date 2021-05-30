import {
  Button,
  Dialog,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  DialogContent,
} from "@material-ui/core";
import React, { useState } from "react";
import HelpIcon from "@material-ui/icons/Help";
import CloseIcon from "@material-ui/icons/Close";

function TuningHelp() {
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const handleHelpModalOpen = () => {
    setHelpModalOpen(true);
  };

  const handleHelpModalClose = () => {
    setHelpModalOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<HelpIcon />}
        variant="text"
        color="primary"
        size="small"
        onClick={handleHelpModalOpen}
      >
        Tuning help
      </Button>
      <Dialog
        open={helpModalOpen}
        onClose={handleHelpModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle disableTypography>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography variant="h6">Tuning help</Typography>
            </Box>

            <IconButton aria-label="close" onClick={handleHelpModalClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6">Equal temperament</Typography>
          <p>
            <a
              href="https://en.xen.wiki/w/Equal-step_tuning"
              target="_blank"
              rel="noreferrer"
            >
              Equal temperaments
            </a>{" "}
            are scales with equal size between notes. In western music in
            general, the most common tuning has been 12-tone equal temperament
            (also known as 12edo or 12-TET) which divides an octave into 12
            equal parts. Other equal temperaments divide the octave differently.
            For example, some music has been written in 24edo (quartertones),
            19edo and 31edo.
          </p>
          <p>
            <b>Number of divisions:</b> number of notes in the scale in wich the
            interval will be divided.
          </p>
          <p>
            <b>Interval to divide:</b> in general will be 2/1 (octave) but may
            be a different value, for example:
            <br /> 41 divisions of 4/1 (double octave) to make{" "}
            <a
              href="https://en.xen.wiki/w/The_Kite_Guitar"
              target="_blank"
              rel="noreferrer"
            >
              Kite guitar tuning
            </a>
            <br /> 13 divisions of 3/1 (tritave) to make{" "}
            <a
              href="https://en.xen.wiki/w/Bohlen-Pierce"
              target="_blank"
              rel="noreferrer"
            >
              Bohlen-Pierce
            </a>
            <br /> 9 divisions of 3/2 (perfect fifth) to make{" "}
            <a
              href="https://en.xen.wiki/w/Carlos_Alpha"
              target="_blank"
              rel="noreferrer"
            >
              Wendy Carlos Alpha tuning
            </a>
            <br /> etc.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TuningHelp;
