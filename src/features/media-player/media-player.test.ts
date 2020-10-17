import {
  searchSongsSuccess,
  updateSortedBy,
} from "./../search-songs/search-songs-actions";
import {
  selectCurrentTrack,
  selectIsNextButtonDisabled,
  selectIsPreviousButtonDisabled,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "./media-player-selectors";
import { fetchTrackData, goToTrack } from "./media-player-actions";
import { Store } from "redux";
import { selectSearchResult } from "features/search-songs";
import { setStore } from "services/application/redux";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import Track from "domain/track";
import { queryStringSortOptions } from "application/routes-config";
import { dummyArtistTracks } from "test-utils/domain-dummies";

describe("Testing search songs feature", () => {
  let store: Store;

  beforeEach(() => {
    store = setStore();
    store.dispatch(updateSortedBy(queryStringSortOptions.unsorted));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));
  });

  it("should update the currentTrack Object ", () => {
    const track = new Track(2);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[1]
    );
  });

  it("should update next and previous paths ", () => {
    const track = new Track(2);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(track)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(track)
    );
  });

  it("should always return the first track if the fetchTrackData receives a number smaller than 1 ", () => {
    const track = new Track(0);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[0]
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(track)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(track)
    );
  });
  it("should isPreviousButtonDisabled true when is the first element ", () => {
    const track = new Track(1);
    store.dispatch(fetchTrackData(track.toZeroBaseIndex()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[0]
    );

    expect(selectIsPreviousButtonDisabled(store.getState())).toBe(true);
    expect(selectIsNextButtonDisabled(store.getState())).toBe(false);
  });

  it("should isNextButtonDisabled true when current track is the last track ", () => {
    const track = new Track(10);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[9]
    );

    expect(selectIsNextButtonDisabled(store.getState())).toBe(true);
    expect(selectIsPreviousButtonDisabled(store.getState())).toBe(false);
  });

  it("should always return the last track if the fetchTrackData receives a number larger than ResultCount ", () => {
    const track = new Track(20);
    store.dispatch(fetchTrackData(track.toZeroBaseIndex()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[9]
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(track)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(track)
    );
  });

  it("should update the currentTrack data when goToTrack function is invoked", () => {
    const track = new Track(5);
    const newTrack = new Track(3);
    store.dispatch(fetchTrackData(track.toZeroBaseIndex()));
    store.dispatch(searchSongsSuccess(dummyArtistTracks));
    store.dispatch(goToTrack(newTrack.getTrackNumber()));

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummyArtistTracks.results[newTrack.toZeroBaseIndex()]
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(newTrack)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(newTrack)
    );
  });
});
