import { UPDATE_SORTED_TRACKS } from "./../search-songs/search-songs-actions";
import {
  FETCH_TRACK_DATA,
  generateCurrentTrackData,
  GO_TO_TRACK,
} from "./media-player-actions";
import { put, takeLatest, fork, take, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { selectSearchResult } from "features/search-songs";
import Track from "domain/track";
import TrackDataGenerator from "domain/track-data";

function* processTrackData(
  currentTrack: ActionPayloadRequired<number>
): SagaIterator {
  yield take(UPDATE_SORTED_TRACKS);

  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const trackData = new TrackDataGenerator(
    new Track(currentTrack.payload),
    searchResult
  );

  yield put(generateCurrentTrackData(trackData.getTrackData()));
}

function* updateTrackData(
  currentTrack: ActionPayloadRequired<number>
): SagaIterator {
  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const trackData = new TrackDataGenerator(
    new Track(currentTrack.payload),
    searchResult
  );

  yield put(generateCurrentTrackData(trackData.getTrackData()));
}

function* getTrackData() {
  yield takeLatest(FETCH_TRACK_DATA, processTrackData);
  yield takeLatest(GO_TO_TRACK, updateTrackData);
}

export const mediaPlayerSagas = [fork(getTrackData)];
