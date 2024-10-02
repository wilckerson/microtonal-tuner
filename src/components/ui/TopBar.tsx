import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title: string;
}
function TopBar(props: TopBarProps) {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => navigate(-1)}
          size="large"
        >
          <ArrowBackIcon />
        </IconButton>
        <Box textAlign="center" style={{ width: "100%" }}>
          <Typography variant="h6">{props.title}</Typography>
        </Box>
        <IconButton style={{ visibility: "hidden" }} size="large">
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
