import { Random } from "test-utils";
import ITunesClient from "./itunes-client";
import { dummySearchData, fetchSearchAPIMocked } from "./mock";

describe("Testing the itunes client class", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchSearchAPIMocked);
  });

  it("should call to the correct url", async () => {
    const term = Random.getString();
    const result = await ITunesClient.search(term);

    expect(global.fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_ITUNES_SEARCH_URI}${term}`,
    );
    expect(result).toEqual(dummySearchData);
  });
});
