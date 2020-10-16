import React from "react";
import { render, screen } from "@testing-library/react";
import Search, { sortEnum } from "./search";
import { ConnectedComponent, ConnectedMemoryRouter, Random } from "test-utils";
import { setStore } from "services/application/redux";
import { dummySearchData } from "services/externals/itunes-api/mock";
import { Store } from "redux";
import mediaPlayerInitialState from "features/media-player/media-player-initial-state";
import routesConfig, { basePaths } from "application/routes-config";

const playlistRowTestId = "playlist-row";
const magnifyingGlassIconTestId = "magnifying-glass-icon";
const emptyPlaylistHeadingTestId = "empty-playlist-heading";
const emptyPlaylistMessage = "Use the search bar to find songs";

const playListHeadings = {
  SONG: "Song",
  ARTIST: "Artist",
  ALBUM: "Album",
  DURATION: "Duration",
  GENRE: "Genre",
  PRICE: "Price",
};

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
          ...dummySearchData,
          searchTerm: randomSearch,
          sortedBy: sortEnum.unsorted,
          sortedTracks: dummySearchData.results,
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

    it("should show all the head labels in the document", () => {
      const { getByText } = screen;

      expect(getByText(playListHeadings.SONG)).toBeInTheDocument();
      expect(getByText(playListHeadings.ARTIST)).toBeInTheDocument();
      expect(getByText(playListHeadings.ALBUM)).toBeInTheDocument();
      expect(getByText(playListHeadings.DURATION)).toBeInTheDocument();
      expect(getByText(playListHeadings.GENRE)).toBeInTheDocument();
      expect(getByText(playListHeadings.PRICE)).toBeInTheDocument();
    });

    it(`should have ${dummySearchData.results.length} songs in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });

    it(`should have ${dummySearchData.results.length} songs in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });
  });
});
