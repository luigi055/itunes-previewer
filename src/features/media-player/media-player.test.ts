import { searchSongsSuccess } from "./../search-songs/search-songs-actions";
import {
  selectCurrentTrack,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "./media-player-selectors";
import { fetchTrackData } from "./media-player-actions";
import { Store } from "redux";
import {
  GET_SONGS_SUCCESS,
  selectSearchResult,
} from "features/search-songs";
import { setStore, storeInitialState } from "services/application/redux";
import {
  dummySearchData,
  fetchSearchAPIMocked,
} from "services/externals/itunes-api/mock";
import { triggeredActions } from "test-utils/triggered-actions";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";

describe("Testing search songs feature", () => {
  let store: Store;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
    store = setStore(storeInitialState);
  });

  it("should update the currentTrack Object ", async () => {
    store.dispatch(fetchTrackData(2));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[1],
    );
  });

  it("should update next and previous paths ", async () => {
    store.dispatch(fetchTrackData(2));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState()),
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(2),
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(2),
    );
  });

  it("should always return the first track if the fetchTrackData receives a number smaller than 1 ", async () => {
    const trackNumber = 0;
    store.dispatch(fetchTrackData(trackNumber));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState()),
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[0],
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(trackNumber),
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(trackNumber),
    );
  });

  it("should always return the last track if the fetchTrackData receives a number larger than ResultCount ", async () => {
    const trackNumber = 20;
    store.dispatch(fetchTrackData(trackNumber));
    store.dispatch(searchSongsSuccess(dummySearchData));

    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator(
      selectSearchResult(store.getState()),
    );

    expect(selectCurrentTrack(store.getState())).toEqual(
      dummySearchData.results[9],
    );

    expect(selectNextTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generateNextTrackURI(trackNumber),
    );
    expect(selectPreviousTrackPath(store.getState())).toEqual(
      mediaPlayerLinkGenerator.generatePreviousTrackURI(trackNumber),
    );
  });
});
