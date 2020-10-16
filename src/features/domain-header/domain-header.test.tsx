import React from "react";
import { createMemoryHistory } from "history";
import { cleanup, render, screen } from "@testing-library/react";
import { ConnectedComponent, ConnectedMemoryRouter, Random } from "test-utils";
import DomainHeader from "./domain-header";
import routesConfig, { basePaths } from "application/routes-config";
import userEvent from "@testing-library/user-event";

const searchInputTestId = "search-input";
const applicationHeadingTestid = "application-heading";
const headingText = "CornerJob Music Player";

describe("Testing DomainHeader Feature", () => {
  let history: any;
  let randomSearch: string = "";

  beforeEach(cleanup);
  beforeEach(() => {
    randomSearch = Random.getString();
  });
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it("should show the correct heading", () => {
    render(
      <ConnectedComponent history={history}>
        <DomainHeader />
      </ConnectedComponent>
    );
    const { getByTestId } = screen;
    const applicationHeading = getByTestId(applicationHeadingTestid);

    expect(applicationHeading.textContent).toBe(headingText);
  });

  it("should fill the search input using the URI query string", () => {
    render(
      <ConnectedMemoryRouter
        initialURLPath={routesConfig.SEARCH}
        route={`${basePaths.SEARCH}/${randomSearch}`}
      >
        <DomainHeader />
      </ConnectedMemoryRouter>
    );
    const { getByTestId } = screen;
    const searchInputElement = getByTestId(
      searchInputTestId
    ).getElementsByTagName("input")[0];

    expect(searchInputElement.value).toBe(randomSearch);
  });

  it(`should update the artistName url param when the user submit the SearchInput component`, () => {
    history.push(basePaths.ROOT);
    render(
      <ConnectedComponent history={history}>
        <DomainHeader />
      </ConnectedComponent>
    );
    const { getByTestId } = screen;
    const searchInputElement = getByTestId(
      searchInputTestId
    ).getElementsByTagName("input")[0];

    userEvent.tab();
    userEvent.type(searchInputElement, randomSearch);
    userEvent.tab();
    document.activeElement.click();

    expect(history.location.pathname).toBe(
      `${basePaths.SEARCH}/${randomSearch}`
    );
  });
});
