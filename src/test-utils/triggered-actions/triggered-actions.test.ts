import { all } from "redux-saga/effects";
import { Store } from "redux";
import { Random } from "../random";
import actionWatcher from "./triggered-actions";
import { setStore } from "services/application/redux";

describe("test utils", () => {
  let store: Store;
  beforeEach(() => {
    store = setStore();
  });

  it("wait for action promise error", async () => {
    const NULL = Random.getString();
    const action = { type: NULL };
    store.dispatch(action);
    try {
      await actionWatcher.waitForAction(action.type);
    } catch (error) {
      expect(error).toMatchObject({
        message: `Timeout looking for Action ${action.type}`,
      });
    }
  });
});
