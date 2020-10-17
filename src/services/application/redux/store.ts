import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./root-reducers";
import rootSagas from "./root-sagas";
import { actionWatcherMiddleware } from "utils/test/triggered-actions";
import storeInitialState from "./store-initial-state";
import composeEnhancer from "utils/test/compose-enhancer";

const sagaMiddleware = createSagaMiddleware();

const setStore = (initialState: State = storeInitialState) => {
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware, actionWatcherMiddleware))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

export default setStore;
