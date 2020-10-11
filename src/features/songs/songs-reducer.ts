import {
  handleAction,
} from "services/application/redux";
import initialState from "./songs-initial-state";
import SearchResult from "services/externals/itunes-api";
import { GET_SONGS_SUCCESS } from "./songs-actions";

const songsStateHandlers: Mapping<Function> = {
  [GET_SONGS_SUCCESS]: (
    _state: SearchResult,
    action: ActionStandard<SearchResult>,
  ) => action.payload,
};

const songsReducer = (
  state: SearchResult = initialState,
  action: ActionStandard<SearchResult>,
) => {
  return handleAction(state, action, songsStateHandlers);
};

export default songsReducer;
