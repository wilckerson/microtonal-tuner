import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import HttpsRedirect from "react-https-redirect";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <HttpsRedirect>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </HttpsRedirect>
  </StrictMode>,
  document.querySelector("#root")
);
