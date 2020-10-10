import { Random } from "./random";

describe("Random: ", () => {
  test("should get different values for each call method", () => {
    const valueOne = Random.getString();
    const valueTwo = Random.getString();

    expect(valueOne === valueTwo).toBeFalsy();
  });
});
