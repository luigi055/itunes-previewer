import { all } from "redux-saga/effects";
import songsSagas from "features/search-songs/search-songs-sagas";

export default function* rootSagas() {
  yield all([
    ...songsSagas,
  ]);
}
