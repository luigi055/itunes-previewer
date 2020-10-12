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
import Track from "domain/track";

function* processTrackData(
  currentTrack: ActionPayloadRequired<number>,
): SagaIterator {
  yield take(GET_SONGS_SUCCESS);

  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchResult);
  const track = new Track(currentTrack.payload).defineMaxLimit(
    searchResult.resultCount,
  );
  const index = track.toZeroBaseIndex();

  const trackData = {
    currentTrack: searchResult
      .results[index],
    nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(
      track.getTrackNumber(),
    ),
    previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
      track.getTrackNumber(),
    ),
  };

  yield put(generateCurrentTrackData(trackData));
}

function* getTrackData() {
  yield takeLatest(FETCH_TRACK_DATA, processTrackData);
}

export const mediaPlayerSagas = [fork(getTrackData)];
