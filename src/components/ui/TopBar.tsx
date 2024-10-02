import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

interface TopBarProps {
  title: string;
}
function TopBar(props: TopBarProps) {
  const history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box textAlign="center" style={{ width: "100%" }}>
          <Typography variant="h6">{props.title}</Typography>
        </Box>
        <IconButton style={{ visibility: "hidden" }}>
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
