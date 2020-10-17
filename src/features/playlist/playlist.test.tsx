import React from "react";
import { render, screen } from "@testing-library/react";
import { ConnectedComponent, Random } from "test-utils";
import { dummySearchData } from "services/externals/itunes-api/mock";
import { queryStringSortOptions } from "application/routes-config";
import PlayList from "./playlist";

const playlistRowTestId = "playlist-row";

describe("Testing the Playlist", () => {
  describe("Testing search page when there are tracks", () => {
    let randomSearch: string = "";

    beforeEach(() => {
      randomSearch = Random.getString();
    });

    beforeEach(() => {
      const searchResult = {
        ...dummySearchData,
        searchTerm: randomSearch,
        sortedBy: queryStringSortOptions.unsorted,
        sortedTracks: dummySearchData.results,
      };
      render(
        <ConnectedComponent>
          <PlayList
            sortedBy={queryStringSortOptions.unsorted.slice(1)}
            onOptionChange={jest.fn()}
            searchSong={searchResult}
          />
        </ConnectedComponent>
      );
    });

    it(`should have ${dummySearchData.results.length} tracks in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });

    it(`should have ${dummySearchData.results.length} tracks in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummySearchData.results.length);
    });
  });
});
