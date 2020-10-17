import {
  FETCH_TRACK_DATA,
  GENERATE_CURRENT_TRACK_DATA,
  GO_TO_TRACK,
} from "./media-player-actions";
import mediaPlayerInitialState from "./media-player-initial-state";

const mediaPlayerStateHandlers: Mapping<Function> = {
  [GENERATE_CURRENT_TRACK_DATA]: (
    _state: MediaPlayerData,
    action: ActionPayloadRequired<MediaPlayerData>
  ) => ({ ...action.payload }),
  [FETCH_TRACK_DATA]: (
    state: MediaPlayerData,
    action: ActionPayloadRequired<number>
  ) => ({ ...state, trackNumber: action.payload }),
  [GO_TO_TRACK]: (
    state: MediaPlayerData,
    action: ActionPayloadRequired<number>
  ) => ({ ...state, trackNumber: action.payload }),
};

export const reduceMediaPlayer = (
  state: MediaPlayerData = mediaPlayerInitialState,
  action: ActionStandard<MediaPlayerData>
) => {
  const handler = mediaPlayerStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
