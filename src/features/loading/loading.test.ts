import { Store } from "redux";
import { setStore, storeInitialState } from "services/application/redux";
import { startLoading, stopLoading } from "./loading-actions";

describe("Testing search songs feature", () => {
  let store: Store;

  beforeEach(() => {
    store = setStore(storeInitialState);
  });

  it("should be false by default", () => {
    expect(store.getState().isLoading).toBe(false);
  });

  it("should be true when startLoading action is dispatched", () => {
    store.dispatch(startLoading());

    expect(store.getState().isLoading).toBe(true);
  });

  it("should be false when stopLoading is dispatched after startLoading", () => {
    store.dispatch(startLoading());
    store.dispatch(stopLoading());

    expect(store.getState().isLoading).toBe(false);
  });
});
