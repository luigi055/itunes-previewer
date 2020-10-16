import { sortObjectsByPropertyAscending } from "./sort-utils";

describe("Testing sort utils", () => {
  const dummyObjects = [
    {
      letter: "x",
      word: "igloo",
      number: 4,
    },
    {
      letter: "b",
      word: "headphones",
      number: 50,
    },

    {
      letter: "a",
      word: "zip",
      number: 20,
    },
  ];

  describe("Testing sortByObjectPropertyAscending function", () => {
    it("should sort by the property with letters ascending", () => {
      const sortedObjects = sortObjectsByPropertyAscending(
        dummyObjects,
        "letter"
      );
      expect(sortedObjects).toEqual([
        {
          letter: "a",
          word: "zip",
          number: 20,
        },
        {
          letter: "b",
          word: "headphones",
          number: 50,
        },
        {
          letter: "x",
          word: "igloo",
          number: 4,
        },
      ]);
    });

    it("should sort by the property with words ascending", () => {
      const sortedObjects = sortObjectsByPropertyAscending(
        dummyObjects,
        "word"
      );
      expect(sortedObjects).toEqual([
        {
          letter: "b",
          word: "headphones",
          number: 50,
        },
        {
          letter: "x",
          word: "igloo",
          number: 4,
        },
        {
          letter: "a",
          word: "zip",
          number: 20,
        },
      ]);
    });

    it("should sort by the property with numbers ascending", () => {
      const sortedObjects = sortObjectsByPropertyAscending(
        dummyObjects,
        "number"
      );
      expect(sortedObjects).toEqual([
        {
          letter: "x",
          word: "igloo",
          number: 4,
        },
        {
          letter: "a",
          word: "zip",
          number: 20,
        },
        {
          letter: "b",
          word: "headphones",
          number: 50,
        },
      ]);
    });
  });
});
