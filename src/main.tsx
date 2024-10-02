import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import HttpsRedirect from "react-https-redirect";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <HttpsRedirect>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HttpsRedirect>
  </StrictMode>,
  document.querySelector("#root")
);
