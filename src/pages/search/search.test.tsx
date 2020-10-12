import React from "react";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Search from "./search";
import { ConnectedComponent, Random } from "test-utils";
import { setStore } from "services/application/redux";
import {
  dummySearchData,
} from "services/externals/itunes-api/mock";
import { triggeredActions } from "test-utils/triggered-actions";
import { Store } from "redux";

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
      </ConnectedComponent>,
    );

    const { getByTestId } = screen;

    const magnifyingGlassIcon = getByTestId(magnifyingGlassIconTestId);
    const emptyPlaylistHeading = getByTestId(emptyPlaylistHeadingTestId);

    expect(magnifyingGlassIcon).toBeInTheDocument();
    expect(emptyPlaylistHeading.textContent).toBe(emptyPlaylistMessage);
  });

  describe("Testing search page when there are songs", () => {
    let history: any;
    let store: Store;
    let randomSearch: string = "";

    beforeEach(() => {
      randomSearch = Random.getString();
      store = setStore(
        {
          searchResult: { ...dummySearchData, searchTerm: randomSearch },
          isLoading: false,
        },
      );
      history = createMemoryHistory();
      triggeredActions.clear();
    });

    it("should show the search term correctly", () => {
      render(
        <ConnectedComponent store={store} history={history}>
          <Search />
        </ConnectedComponent>,
      );
      const { getByTestId } = screen;

      const searchTermComponent = getByTestId("search-term");

      expect(searchTermComponent.textContent).toBe(
        `Searching "${randomSearch}"`,
      );
    });

    it("should show all the head labels in the document", () => {
      render(
        <ConnectedComponent store={store} history={history}>
          <Search />
        </ConnectedComponent>,
      );
      const { getByText } = screen;

      expect(getByText(playListHeadings.SONG)).toBeInTheDocument();
      expect(getByText(playListHeadings.ARTIST)).toBeInTheDocument();
      expect(getByText(playListHeadings.ALBUM)).toBeInTheDocument();
      expect(getByText(playListHeadings.DURATION)).toBeInTheDocument();
      expect(getByText(playListHeadings.GENRE)).toBeInTheDocument();
      expect(getByText(playListHeadings.PRICE)).toBeInTheDocument();
    });

    it(`should have ${dummySearchData.results.length} songs in the playlist`, () => {
      render(
        <ConnectedComponent store={store} history={history}>
          <Search />
        </ConnectedComponent>,
      );
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });

    it(`should have ${dummySearchData.results.length} songs in the playlist`, () => {
      render(
        <ConnectedComponent store={store} history={history}>
          <Search />
        </ConnectedComponent>,
      );
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });
  });
});
