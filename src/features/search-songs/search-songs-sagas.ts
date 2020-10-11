import { put, call, takeLatest, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { searchSongsSuccess, GET_SONGS_START } from "./search-songs-actions";
import { ITunesClient } from "services/externals/itunes-api";
import { startLoading, stopLoading } from "features/loading";

function* getSongs(props: any): SagaIterator {
  const { payload } = props;
  if (payload === "") return;

  try {
    yield put(startLoading());
    const response: SearchResult = yield call(ITunesClient.search, payload);
    yield put(searchSongsSuccess(response));
  } catch (error) {
    console.error("implement error case");
  } finally {
    yield put(stopLoading());
  }
}

function* getSongsSaga() {
  yield takeLatest(GET_SONGS_START, getSongs);
}

const songsSagas = [fork(getSongsSaga)];

export default songsSagas;
