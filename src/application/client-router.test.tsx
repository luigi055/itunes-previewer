import React, { FunctionComponent } from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import ClientRouter from "./client-router";
import routesConfig from "./routes-config";

const RouterWrapper: FunctionComponent<{ history: any }> = ({
  history,
  children,
}) => <Router history={history}>{children}</Router>;

describe("Testing ClientRouter component", () => {
  let history: any;

  beforeEach(cleanup);
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`should redirect to search url when the user access the app using root ${routesConfig.ROOT}`, () => {
    history.push(routesConfig.ROOT);
    render(
      <RouterWrapper history={history}>
        <ClientRouter />
      </RouterWrapper>
    );

    expect(history.location.pathname).toBe(routesConfig.SEARCH);
  });

  it(`should take the user to the search page when the user access to the ${routesConfig.SEARCH}`, () => {
    history.push(routesConfig.SEARCH);
    render(
      <RouterWrapper history={history}>
        <ClientRouter />
      </RouterWrapper>
    );

    expect(history.location.pathname).toBe(routesConfig.SEARCH);
  });
});
