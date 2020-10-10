import React from "react";
import ClientRouter from "./client-router";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, defaultTheme } from "styles";
import { ThemeProvider } from "styled-components";
import DomainHeader from "features/domain-header.tsx/domain-header";

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
