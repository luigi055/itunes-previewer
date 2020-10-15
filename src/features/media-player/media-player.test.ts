import { searchSongsSuccess } from "./../search-songs/search-songs-actions";
import {
  selectCurrentTrack,
  selectIsNextButtonDisabled,
  selectIsPreviousButtonDisabled,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "./media-player-selectors";
import { fetchTrackData } from "./media-player-actions";
import { Store } from "redux";
import { GET_SONGS_SUCCESS, selectSearchResult } from "features/search-songs";
import { setStore, storeInitialState } from "services/application/redux";
import {
  dummySearchData,
  fetchSearchAPIMocked,
} from "services/externals/itunes-api/mock";
import { triggeredActions } from "test-utils/triggered-actions";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import Track from "domain/track";

describe("Testing search songs feature", () => {
  let store: Store;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
    store = setStore(storeInitialState);
  });

  it("should update the currentTrack Object ", async () => {
    const track = new Track(2);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[1]
    );
  });

  it("should update next and previous paths ", async () => {
    const track = new Track(2);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

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

  it("should always return the first track if the fetchTrackData receives a number smaller than 1 ", async () => {
    const track = new Track(0);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[0]
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(track)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(track)
    );
  });
  it("should isPreviousButtonDisabled true when is the first element ", async () => {
    const track = new Track(1);
    store.dispatch(fetchTrackData(track.toZeroBaseIndex()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[0]
    );

    expect(selectIsPreviousButtonDisabled(store.getState())).toBe(true);
    expect(selectIsNextButtonDisabled(store.getState())).toBe(false);
  });

  it("should isNextButtonDisabled true when current track is the last track ", async () => {
    const track = new Track(10);
    store.dispatch(fetchTrackData(track.getTrackNumber()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[9]
    );

    expect(selectIsNextButtonDisabled(store.getState())).toBe(true);
    expect(selectIsPreviousButtonDisabled(store.getState())).toBe(false);
  });

  it("should always return the last track if the fetchTrackData receives a number larger than ResultCount ", async () => {
    const track = new Track(20);
    store.dispatch(fetchTrackData(track.toZeroBaseIndex()));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState())
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[9]
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(track)
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(track)
    );
  });
});
