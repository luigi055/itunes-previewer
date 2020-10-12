import { Random } from "test-utils";
import { dummySearchData } from "services/externals/itunes-api/mock";
import MediaPlayerLinks from "./media-player-links";

describe("testing MediaPlayerLinks class", () => {
  it("should get track-1 when pass in 0 to the getURIByIndex method trackIndex is 1-based", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[0].trackName;

    expect(mediaPlayerLinks.getURIByTrackIndex(0)).toBe(
      `/preview/track-0/${dummyTrackName}?${randomSearch}`,
    );
  });

  it("should get the next URI when invoke the getNextTrackURI method", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[2].trackName;

    expect(mediaPlayerLinks.getNextTrackURI(1)).toBe(
      `/preview/track-2/${dummyTrackName}?${randomSearch}`,
    );
  });

  it("should get the same URI when invoke the getNextTrackURI method and is the last element", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.getNextTrackURI(9)).toBe(
      `/preview/track-9/${dummyTrackName}?${randomSearch}`,
    );
  });

  it("should get the last URI when invoke the getNextTrackURI method and the number is larger than the last track", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.getNextTrackURI(20)).toBe(
      `/preview/track-9/${dummyTrackName}?${randomSearch}`,
    );
  });

  it("should get the same URI when invoke the getPreviousTrackURI method and is the first track", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[0].trackName;

    expect(mediaPlayerLinks.getPreviousTrackURI(0)).toBe(
      `/preview/track-0/${dummyTrackName}?${randomSearch}`,
    );
  });

  it("should get previous URI when using the getPreviousTrackURI method", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinks(
      { ...dummySearchData, searchTerm: randomSearch },
    );
    const dummyTrackName = dummySearchData.results[4].trackName;

    expect(mediaPlayerLinks.getPreviousTrackURI(5)).toBe(
      `/preview/track-4/${dummyTrackName}?${randomSearch}`,
    );
  });
});
