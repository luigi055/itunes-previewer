import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import DomainHeader from "features/domain-header";
import { GlobalStyles, defaultTheme } from "styles";
import ClientRouter from "./client-router";
import { setStore } from "services/application/redux";

function App() {
  return (
    <Provider store={setStore()}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <DomainHeader />
          <ClientRouter />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
