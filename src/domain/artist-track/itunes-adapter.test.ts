import { dummySearchData } from "./../../services/externals/itunes-api/mock";
import ItunesAdapter from "./itunes-adapter";

describe("Testing ITunesAdapter class", () => {
  it("should adapt ItunesTracks model to ArtistTracks Model", () => {
    const adaptedTracks = new ItunesAdapter(dummySearchData).adaptModel();

    const expectedAdaptedTracks = dummySearchData.results.map(
      (iTunesTrack) => ({
        trackId: iTunesTrack.trackId,
        trackName: iTunesTrack.trackName,
        artistName: iTunesTrack.artistName,
        collectionName: iTunesTrack.collectionName,
        trackTimeMillis: iTunesTrack.trackTimeMillis,
        genre: iTunesTrack.primaryGenreName,
        trackPrice: iTunesTrack.trackPrice,
        currency: iTunesTrack.currency,
        previewUrl: iTunesTrack.previewUrl,
        artworkUrl60: iTunesTrack.artworkUrl60,
        artworkUrl100: iTunesTrack.artworkUrl100,
      })
    );

    expect(adaptedTracks).toEqual({
      results: expectedAdaptedTracks,
      resultCount: dummySearchData.resultCount,
    });
  });
});
