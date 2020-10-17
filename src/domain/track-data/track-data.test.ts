import searchSongsInitialState from "features/search-songs/search-songs-initial-state";
import { Random } from "test-utils/random/random";
import { dummySearchData } from "services/externals/itunes-api/mock";
import Track from "domain/track";
import TrackDataGenerator from "./track-data";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";

describe("Testing TrackDataGenerator class", () => {
  it("should generate the correct trackData", () => {
    const searchTerm = Random.getString();
    const searchSongs = {
      ...searchSongsInitialState,
      sortedTracks: dummySearchData.results,
      resultCount: dummySearchData.resultCount,
      searchTerm: searchTerm,
    };
    const currentTrack = new Track(2);
    const trackDataGenerator = new TrackDataGenerator(
      currentTrack,
      searchSongs
    );
    const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(
      searchSongs
    );

    expect(trackDataGenerator.getTrackData()).toEqual({
      currentTrack: searchSongs.sortedTracks[currentTrack.toZeroBaseIndex()],
      nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(
        currentTrack
      ),
      previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
        currentTrack
      ),
      isNextButtonDisabled: currentTrack.isLastTrack(),
      isPreviousButtonDisabled: currentTrack.isFirstTrack(),
      trackNumber: currentTrack.getTrackNumber(),
    });
  });
});
