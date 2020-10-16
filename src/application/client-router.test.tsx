import React from "react";
import { createMemoryHistory } from "history";
import { cleanup, render } from "@testing-library/react";
import ClientRouter from "./client-router";
import { basePaths } from "./routes-config";
import { ConnectedComponent } from "test-utils";

describe("Testing ClientRouter component", () => {
  let history: any;

  beforeEach(cleanup);
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it(`should redirect to search url when the user access the app using root ${basePaths.ROOT}`, () => {
    history.push(basePaths.ROOT);
    render(
      <ConnectedComponent history={history}>
        <ClientRouter />
      </ConnectedComponent>
    );

    expect(history.location.pathname).toBe(basePaths.SEARCH);
  });

  it(`should take the user to the search page when the user access to the ${basePaths.SEARCH}`, () => {
    history.push(basePaths.SEARCH);
    render(
      <ConnectedComponent history={history}>
        <ClientRouter />
      </ConnectedComponent>
    );

    expect(history.location.pathname).toBe(basePaths.SEARCH);
  });
});
