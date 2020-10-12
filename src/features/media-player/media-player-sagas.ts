import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import { GET_SONGS_SUCCESS } from "./../search-songs/search-songs-actions";
import {
  FETCH_TRACK_DATA,
  generateCurrentTrackData,
} from "./media-player-actions";
import { put, takeLatest, fork, take, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
// import { startLoading, stopLoading } from "features/loading";
import { selectSearchResult } from "features/search-songs";

function* processTrackData(
  currentTrack: ActionPayloadRequired<number>,
): SagaIterator {
  yield take(GET_SONGS_SUCCESS);

  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchResult);

  const trackData = {
    currentTrack: searchResult.results[currentTrack.payload - 1],
    nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(
      currentTrack.payload,
    ),
    previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
      currentTrack.payload,
    ),
  };

  yield put(generateCurrentTrackData(trackData));
}

function* getTrackData() {
  yield takeLatest(FETCH_TRACK_DATA, processTrackData);
}

export const mediaPlayerSagas = [fork(getTrackData)];
