import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
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

function* processTrackData(
  currentTrack: ActionPayloadRequired<number>
): SagaIterator {
  yield take(UPDATE_SORTED_TRACKS);

  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchResult);
  const track = new Track(currentTrack.payload).defineMaxLimit(
    searchResult.resultCount
  );

  yield put(
    generateCurrentTrackData({
      currentTrack: searchResult.sortedTracks[track.toZeroBaseIndex()],
      nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(track),
      previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
        track
      ),
      isNextButtonDisabled: track.isLastTrack(),
      isPreviousButtonDisabled: track.isFirstTrack(),
      trackNumber: track.getTrackNumber(),
    })
  );
}

function* updateTrackData(
  currentTrack: ActionPayloadRequired<number>
): SagaIterator {
  const searchResult = (yield select(selectSearchResult)) as SearchSongsState;
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchResult);
  const track = new Track(currentTrack.payload).defineMaxLimit(
    searchResult.resultCount
  );

  yield put(
    generateCurrentTrackData({
      currentTrack: searchResult.sortedTracks[track.toZeroBaseIndex()],
      nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(track),
      previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
        track
      ),
      isNextButtonDisabled: track.isLastTrack(),
      isPreviousButtonDisabled: track.isFirstTrack(),
      trackNumber: track.getTrackNumber(),
    })
  );
}

function* getTrackData() {
  yield takeLatest(FETCH_TRACK_DATA, processTrackData);
  yield takeLatest(GO_TO_TRACK, updateTrackData);
}

export const mediaPlayerSagas = [fork(getTrackData)];
