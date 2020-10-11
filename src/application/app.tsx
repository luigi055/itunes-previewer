import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, defaultTheme } from "styles";
import DomainHeader from "features/domain-header";
import ClientRouter from "./client-router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <DomainHeader />
        <ClientRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
