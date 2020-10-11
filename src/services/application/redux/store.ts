import { State } from "./state.d";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeEnhancer } from "./collaborators";
import rootReducers from "./root-reducers";
import rootSagas from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const setStore = (initialState?: State) => {
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

export default setStore;
