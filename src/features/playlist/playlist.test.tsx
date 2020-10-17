import React from "react";
import { render, screen } from "@testing-library/react";
import { ConnectedComponent, Random } from "utils/test";
import { queryStringSortOptions } from "application/routes-config";
import PlayList from "./playlist";
import { dummyArtistTracks } from "utils/test/domain-dummies";

const playlistRowTestId = "playlist-row";

describe("Testing the Playlist", () => {
  describe("Testing search page when there are tracks", () => {
    let randomSearch: string = "";

    beforeEach(() => {
      randomSearch = Random.getString();
    });

    beforeEach(() => {
      const searchResult = {
        ...dummyArtistTracks,
        searchTerm: randomSearch,
        sortedBy: queryStringSortOptions.unsorted,
        sortedTracks: dummyArtistTracks.results,
      };
      render(
        <ConnectedComponent>
          <PlayList
            sortedBy={queryStringSortOptions.unsorted.slice(1)}
            onSortChange={jest.fn()}
            searchSong={searchResult}
          />
        </ConnectedComponent>
      );
    });

    it(`should have ${dummyArtistTracks.results.length} tracks in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummyArtistTracks.results.length);
    });

    it(`should have ${dummyArtistTracks.results.length} tracks in the playlist`, () => {
      const { getAllByTestId } = screen;
      const playlistRowCount = getAllByTestId(playlistRowTestId).length;

      expect(playlistRowCount).toBe(dummyArtistTracks.results.length);
    });
  });
});
