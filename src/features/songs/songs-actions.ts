import { Action } from "redux";
import SearchResult from "services/externals/itunes-api";

const SONGS_FEATURE = "SONGS";

export const GET_SONGS_START: string = `${SONGS_FEATURE}/GET_SONGS_START`;
export const GET_SONGS_SUCCESS: string = `${SONGS_FEATURE}/GET_SONGS_SUCCESS`;
export const GET_SONGS_FAIL: string = `${SONGS_FEATURE}/GET_SONGS_FAIL`;

export const getSongsStart = (): Action => ({
  type: GET_SONGS_START,
});

export const getSongsSuccess = (
  payload: SearchResult,
): ActionStandard<SearchResult> => ({
  type: GET_SONGS_SUCCESS,
  payload,
});
