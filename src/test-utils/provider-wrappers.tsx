import React, { FunctionComponent } from "react";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import {
  Router,
  MemoryRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { defaultTheme } from "styles";
import { setStore } from "services/application/redux";
import { Provider } from "react-redux";
import { Store } from "redux";

export const ComponentWithTheme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export const ConnectedComponent: FunctionComponent<{
  store?: Store;
  history?: any;
}> = ({ store = setStore(), history = createMemoryHistory(), children }) => (
  <Provider store={store}>
    <ComponentWithTheme>
      <Router history={history}>{children}</Router>;
    </ComponentWithTheme>
  </Provider>
);

export const ConnectedMemoryRouter: FunctionComponent<{
  store?: Store;
  initialURLPath?: string;
}> = ({ store = setStore(), initialURLPath = "", children }) => (
  <Provider store={store}>
    <ComponentWithTheme>
      <MemoryRouter initialEntries={[initialURLPath]}>
        <Route path={initialURLPath}>{children}</Route>
      </MemoryRouter>
    </ComponentWithTheme>
  </Provider>
);
