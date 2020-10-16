import getNameOf from "./get-name-of";

describe("test over get.name-of", () => {
  class FakeObject {
    fakeProperty: string = "fakeProperty";
    otherFakeProperty: FakeObject = new FakeObject();
  }

  test("should get 'fakeProperty'", () => {
    expect(getNameOf<FakeObject>((fakeObj) => fakeObj.fakeProperty)).toBe(
      "fakeProperty"
    );
  });
});
