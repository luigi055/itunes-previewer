import { compose, Action } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export const composeEnhancer: Function =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const handleAction = <S>(
  state: S,
  action: Action,
  map: Mapping<Function>,
): S => {
  const handler = map[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
