import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

type Props = {
  onAllow: () => void;
};

const Permission = (props: Props) => {
  const [denied, setDenied] = useState(false);

  async function handleClick() {
    try {
      var mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      console.log("media", mediaStream);
      props.onAllow();
    } catch (e) {
      console.log("catch", e);
      setDenied(true);
    }
  }

  return (
    <Box pt={5} textAlign="center">
      {!denied && (
        <div>
          <MicIcon style={{ fontSize: "5rem" }} />

          <Typography variant="h6">
            This tuner works using the microphone on your device.
          </Typography>
          <p>Please, use the button below and them press "Allow".</p>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Allow my microphone use
          </Button>
        </div>
      )}

      {denied && (
        <div>
          <MicOffIcon style={{ fontSize: "5rem" }} />

          <Typography variant="h6">Microphone permission denied :(</Typography>
          <p>
            Please, reload the page and try again. If reloading does not help,
            open the browser settings and remove the denied microphone
            permission.
          </p>
        </div>
      )}
    </Box>
  );
};

export default Permission;
