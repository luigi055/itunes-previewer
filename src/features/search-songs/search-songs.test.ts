import { Store } from "redux";
import { START_LOADING } from "./../loading/loading-actions";
import { Random } from "utils/test";
import {
  GET_SONGS_FAIL,
  GET_SONGS_START,
  GET_SONGS_SUCCESS,
  searchSongsStart,
} from "./search-songs-actions";
import { setStore, storeInitialState } from "services/application/redux";
import searchSongsInitialState from "./search-songs-initial-state";
import { fetchSearchAPIMocked } from "services/externals/itunes-api/mock";
import { triggeredActions } from "utils/test/triggered-actions";
import { STOP_LOADING } from "features/loading";
import {
  selectResults,
  selectResultCount,
  selectSearchResult,
} from "./search-songs-selectors";
import { dummyArtistTracks } from "utils/test/domain-dummies";
import { getSongs } from "./search-songs-sagas";

describe("Testing search songs feature", () => {
  let store: Store;
  let randomTerm: string = "";

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
    randomTerm = Random.getString();
    store = setStore(storeInitialState);
    triggeredActions.clear();
  });

  it("should not search for song when the query string is empty", () => {
    store.dispatch(searchSongsStart(""));

    expect(selectSearchResult(store.getState())).toEqual(
      searchSongsInitialState
    );
  });

  it("should search for a song based on the query term", async () => {
    store.dispatch(searchSongsStart(randomTerm));
    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(triggeredActions.getAction(GET_SONGS_START)?.payload).toBe(
      randomTerm
    );
    expect(selectResultCount(store.getState())).toEqual(
      dummyArtistTracks.resultCount
    );
    expect(selectResults(store.getState())).toEqual(dummyArtistTracks.results);
  });

  it("should start the loading action and stop it once the saga finish", async () => {
    store.dispatch(searchSongsStart(randomTerm));
    await triggeredActions.waitForAction(STOP_LOADING);

    expect(triggeredActions.getLastActionCalled(START_LOADING)?.type).toEqual(
      START_LOADING
    );
    expect(triggeredActions.getLastActionCalled(STOP_LOADING)?.type).toEqual(
      STOP_LOADING
    );
  });
});

describe("Test Error handling (behavior not implemented)", () => {
  let store: Store;
  let randomTerm: string = "";

  beforeEach(() => {
    randomTerm = Random.getString();
    store = setStore();
  });

  it(`should dispatch ${GET_SONGS_FAIL}`, () => {
    store.dispatch(searchSongsStart(randomTerm));

    const generator = getSongs(searchSongsStart(randomTerm));
    generator.next();
    generator.next();

    expect(generator.next().value.payload.action).toEqual({
      type: GET_SONGS_FAIL,
      error: true,
    });
  });
});
