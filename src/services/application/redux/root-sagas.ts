import { all } from "redux-saga/effects";
import songsSagas from "features/songs/songs-sagas";

export default function* rootSagas() {
  yield all([
    ...songsSagas,
  ]);
}
