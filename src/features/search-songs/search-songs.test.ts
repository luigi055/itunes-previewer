import { START_LOADING } from "./../loading/loading-actions";
import { Random } from "test-utils";
import { GET_SONGS_SUCCESS, searchSongsStart } from "./search-songs-actions";
import { setStore } from "services/application/redux";
import searchSongsInitialState from "./search-songs-initial-state";
import {
  dummySearchData,
  fetchSearchAPIMocked,
} from "services/externals/itunes-api/mock";
import { triggeredActions } from "test-utils/triggered-actions";
import { STOP_LOADING } from "features/loading";

describe("Testing search songs feature", () => {
  it("should not search for song when the query string is empty", () => {
    const store = setStore(
      { searchResult: searchSongsInitialState, isLoading: false },
    );

    store.dispatch(searchSongsStart(""));

    expect(store.getState().searchResult).toEqual(searchSongsInitialState);
  });

  it("should search for a song based on the query term", async () => {
    const randomTerm = Random.getString();
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
    const store = setStore(
      { searchResult: searchSongsInitialState, isLoading: false },
    );

    store.dispatch(searchSongsStart(randomTerm));
    await triggeredActions.waitForAction(GET_SONGS_SUCCESS);

    expect(store.getState().searchResult.resultCount).toEqual(
      dummySearchData.resultCount,
    );
    expect(store.getState().searchResult.results).toEqual(
      dummySearchData.results,
    );
  });

  it("should start the loading action and stop it once the saga finish", async () => {
    const randomTerm = Random.getString();
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
    const store = setStore(
      { searchResult: searchSongsInitialState, isLoading: false },
    );

    store.dispatch(searchSongsStart(randomTerm));
    await triggeredActions.waitForAction(STOP_LOADING);

    expect(triggeredActions.getLastActionCalled(START_LOADING).type).toEqual(
      START_LOADING,
    );
    expect(triggeredActions.getLastActionCalled(STOP_LOADING).type).toEqual(
      STOP_LOADING,
    );
  });
});
