import React from "react";
import ClientRouter from "./client-router";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, defaultTheme } from "styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <ClientRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
