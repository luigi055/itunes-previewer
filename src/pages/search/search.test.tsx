import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./search";
import { ConnectedComponent, ConnectedMemoryRouter, Random } from "test-utils";
import { setStore } from "services/application/redux";
import { Store } from "redux";
import mediaPlayerInitialState from "features/media-player/media-player-initial-state";
import routesConfig, {
  basePaths,
  queryStringSortOptions,
} from "application/routes-config";
import userEvent from "@testing-library/user-event";
import { triggeredActions } from "test-utils/triggered-actions";
import { UPDATE_SORTED_BY } from "features/search-songs";
import { dummyArtistTracks } from "test-utils/domain-dummies";

const playlistRowTestId = "playlist-row";
const magnifyingGlassIconTestId = "magnifying-glass-icon";
const emptyPlaylistHeadingTestId = "empty-playlist-heading";
const emptyPlaylistMessage = "Use the search bar to find songs";

const headingGenreButtonTestId = "heading-genre-button";
const headingDurationButtonTestId = "heading-duration-button";
const headingPriceButtonTestId = "heading-price-button";

describe("Testing the search page", () => {
  it("should show the empty songs message", () => {
    render(
      <ConnectedComponent>
        <Search />
      </ConnectedComponent>
    );

    const { getByTestId } = screen;

    const magnifyingGlassIcon = getByTestId(magnifyingGlassIconTestId);
    const emptyPlaylistHeading = getByTestId(emptyPlaylistHeadingTestId);

    expect(magnifyingGlassIcon).toBeInTheDocument();
    expect(emptyPlaylistHeading.textContent).toBe(emptyPlaylistMessage);
  });

  describe("Testing search page when there are songs", () => {
    let store: Store;
    let randomSearch: string = "";

    beforeEach(() => {
      randomSearch = Random.getString();
      store = setStore({
        searchResult: {
          ...dummyArtistTracks,
          searchTerm: randomSearch,
          sortedBy: queryStringSortOptions.unsorted,
          sortedTracks: dummyArtistTracks.results,
        },
        isLoading: false,
        mediaPlayerData: mediaPlayerInitialState,
      });
    });

    beforeEach(() => {
      render(
        <ConnectedMemoryRouter
          store={store}
          initialURLPath={routesConfig.SEARCH}
          route={`${basePaths.SEARCH}/${Random.getString()}?sort-by=unsorted`}
        >
          <Search />
        </ConnectedMemoryRouter>
      );
    });

    beforeEach(() => {
      triggeredActions.clear();
    });

    it(`should have ${dummyArtistTracks.results.length} songs in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummyArtistTracks.results.length);
    });

    it(`should have ${dummyArtistTracks.results.length} songs in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummyArtistTracks.results.length);
    });

    it(`should dispatch the ${UPDATE_SORTED_BY} when the user clicks on sort by genre`, () => {
      const { getByTestId } = screen;

      userEvent.click(getByTestId(headingGenreButtonTestId));
      const action = triggeredActions.getAction(UPDATE_SORTED_BY);

      expect(action?.payload).toBe(queryStringSortOptions.sortByGenre);
    });

    it(`should dispatch the ${UPDATE_SORTED_BY} when the user clicks on sort by price`, () => {
      const { getByTestId } = screen;

      userEvent.click(getByTestId(headingPriceButtonTestId));
      const action = triggeredActions.getAction(UPDATE_SORTED_BY);

      expect(action?.payload).toBe(queryStringSortOptions.sortByPrice);
    });

    it(`should dispatch the ${UPDATE_SORTED_BY} when the user clicks on sort by duration`, () => {
      const { getByTestId } = screen;

      userEvent.click(getByTestId(headingDurationButtonTestId));
      const action = triggeredActions.getAction(UPDATE_SORTED_BY);

      expect(action?.payload).toBe(queryStringSortOptions.sortByDuration);
    });
  });
});
