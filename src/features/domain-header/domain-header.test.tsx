import React from "react";
import { createMemoryHistory } from "history";
import { cleanup, render, screen } from "@testing-library/react";
import { ConnectedComponent, Random } from "test-utils";
import DomainHeader from "./domain-header";
import routesConfig from "application/routes-config";
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
      </ConnectedComponent>,
    );
    const { getByTestId } = screen;
    const applicationHeading = getByTestId(applicationHeadingTestid);

    expect(applicationHeading.textContent).toBe(headingText);
  });

  it("should fill the search input using the URI query string", () => {
    history.push(`${routesConfig.SEARCH}?${randomSearch}%20${randomSearch}`);
    render(
      <ConnectedComponent history={history}>
        <DomainHeader />
      </ConnectedComponent>,
    );
    const { getByTestId } = screen;
    const searchInputElement =
      getByTestId(searchInputTestId).getElementsByTagName("input")[0];

    expect(searchInputElement.value).toBe(`${randomSearch} ${randomSearch}`);
  });

  it(`should update the query string url when the user submit the SearchInput component`, () => {
    history.push(routesConfig.ROOT);
    render(
      <ConnectedComponent history={history}>
        <DomainHeader />
      </ConnectedComponent>,
    );
    const { getByTestId } = screen;
    const searchInputElement =
      getByTestId(searchInputTestId).getElementsByTagName("input")[0];

    userEvent.tab();
    userEvent.type(searchInputElement, randomSearch);
    userEvent.tab();
    document.activeElement.click();

    expect(history.location.pathname).toBe(routesConfig.SEARCH);
    expect(history.location.search).toBe(`?${randomSearch}`);
  });
});
