interface State {
  searchResult: SearchSongsState;
  isLoading: boolean;
  mediaPlayerData: MediaPlayerData;
}

interface ActionStandardBase {
  type: string;
  meta?: any;
  error?: any;
}

interface ActionStandard<T> extends ActionStandardBase {
  payload?: T;
}

interface ActionPayloadRequired<T> extends ActionStandardBase {
  payload: T;
}
