import React, { FunctionComponent } from "react";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { defaultTheme } from "styles";

export const ComponentWithTheme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);

export const ConnectedComponent: FunctionComponent<{ history: any }> = (
  { history = createMemoryHistory(), children },
) => (
  <ComponentWithTheme>
    <Router history={history}>{children}</Router>;
  </ComponentWithTheme>
);
