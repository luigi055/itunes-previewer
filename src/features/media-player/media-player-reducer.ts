import { GENERATE_CURRENT_TRACK_DATA } from "./media-player-actions";

const mediaPlayerStateHandlers: Mapping<Function> = {
  [GENERATE_CURRENT_TRACK_DATA]: (
    _state: MediaPlayerData,
    action: ActionPayloadRequired<MediaPlayerData>,
  ) => ({ ...action.payload }),
};

export const reduceMediaPlayer = (
  state: MediaPlayerData | null = null,
  action: ActionStandard<MediaPlayerData>,
) => {
  const handler = mediaPlayerStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
