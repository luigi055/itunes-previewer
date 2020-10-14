import { all } from "redux-saga/effects";
import { songsSagas } from "features/search-songs";
import { mediaPlayerSagas } from "features/media-player";

export default function* rootSagas() {
  yield all([
    ...songsSagas,
    ...mediaPlayerSagas,
  ]);
}
