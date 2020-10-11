import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeEnhancer } from "./collaborators";
import registeredReducers from "./registered-reducers";
import rootSagas from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const setStore = () => {
  const store = createStore(
    registeredReducers,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

export default setStore;
