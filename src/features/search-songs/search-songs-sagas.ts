import { put, call, takeLatest, fork, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  searchSongsSuccess,
  GET_SONGS_START,
  updateSortedTracks,
  GET_SONGS_SUCCESS,
} from "./search-songs-actions";
import { ITunesClient } from "services/externals/itunes-api";
import { startLoading, stopLoading } from "features/loading";
import { selectResults, selectSortedBy } from "./search-songs-selectors";
import { getSortRules } from "pages/search/search";

function* getSongs(searchTerm: ActionPayloadRequired<string>): SagaIterator {
  const { payload } = searchTerm;

  try {
    yield put(startLoading());
    if (payload === "") {
      yield put(searchSongsSuccess({ resultCount: 0, results: [] }));
    } else {
      const response: SearchResult = yield call(ITunesClient.search, payload);
      yield put(searchSongsSuccess(response));
    }
  } catch (error) {
    console.error("implement error case");
  } finally {
    yield put(stopLoading());
  }
}

function* getSortedTracks(): SagaIterator {
  const sortedBy = yield select(selectSortedBy);
  const results = yield select(selectResults);

  const sortedTracks = getSortRules(results)[sortedBy] || results;
  yield put(updateSortedTracks(sortedTracks));
}

function* getSongsSaga() {
  yield takeLatest(GET_SONGS_START, getSongs);
  yield takeLatest(GET_SONGS_SUCCESS, getSortedTracks);
}

export const songsSagas = [fork(getSongsSaga)];
