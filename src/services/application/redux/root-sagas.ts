import { all } from "redux-saga/effects";
import songsSagas from "features/search-songs/search-songs-sagas";
import { mediaPlayerSagas } from "features/media-player/media-player-sagas";

export default function* rootSagas() {
  yield all([
    ...songsSagas,
    ...mediaPlayerSagas,
  ]);
}
