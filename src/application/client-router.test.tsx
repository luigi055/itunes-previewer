import React from "react";
import { createMemoryHistory } from "history";
import { cleanup, render } from "@testing-library/react";
import ClientRouter from "./client-router";
import routesConfig from "./routes-config";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles";
import { ConnectedComponent } from "test-utils";

describe("Testing ClientRouter component", () => {
  let history: any;

  beforeEach(cleanup);
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`should redirect to search url when the user access the app using root ${routesConfig.ROOT}`, () => {
    history.push(routesConfig.ROOT);
    render(
      <ConnectedComponent history={history}>
        <ClientRouter />
      </ConnectedComponent>,
    );

    expect(history.location.pathname).toBe(routesConfig.SEARCH);
  });

  it(`should take the user to the search page when the user access to the ${routesConfig.SEARCH}`, () => {
    history.push(routesConfig.SEARCH);
    render(
      <ConnectedComponent history={history}>
        <ClientRouter />
      </ConnectedComponent>,
    );

    expect(history.location.pathname).toBe(routesConfig.SEARCH);
  });
});
