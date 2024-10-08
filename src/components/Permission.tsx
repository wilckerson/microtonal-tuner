import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

type Props = {
  onAllow: () => void;
};

const Permission = (props: Props) => {
  const [denied, setDenied] = useState(false);

  async function handleClick() {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      props.onAllow();
    } catch (e) {
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
