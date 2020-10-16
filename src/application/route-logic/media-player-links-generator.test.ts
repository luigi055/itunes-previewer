import { Random } from "test-utils";
import { dummySearchData } from "services/externals/itunes-api/mock";
import MediaPlayerLinksGenerator, {
  IMediaPlayerLinksGenerator,
} from "./media-player-links-generator";
import Track from "domain/track";
import { sortEnum } from "pages/search/search";

describe("testing MediaPlayerLinkGenerator class", () => {
  let randomSearch: string;
  let mediaPlayerLinks: IMediaPlayerLinksGenerator;

  beforeEach(() => {
    randomSearch = Random.getString();
    mediaPlayerLinks = new MediaPlayerLinksGenerator({
      ...dummySearchData,
      searchTerm: randomSearch,
      sortedTracks: dummySearchData.results,
      sortedBy: sortEnum.unsorted,
    });
  });

  it("should get track-1 when pass in 0 to the getURIFromZeroBasedIndex method trackIndex is 1-based", () => {
    const dummyTrackName = dummySearchData.results[0].trackName;

    expect(mediaPlayerLinks.generateURIFromZeroBasedPosition(0)).toBe(
      `/preview/${randomSearch}/track-1/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get the next URI when invoke the getNextTrackURI method", () => {
    const dummyTrackName = dummySearchData.results[1].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(1))).toBe(
      `/preview/${randomSearch}/track-2/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get the same URI when invoke the getNextTrackURI method and is the last element", () => {
    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(9))).toBe(
      `/preview/${randomSearch}/track-10/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get the first track when getNextTrackURI is invoked with a number smaller than 1", () => {
    const dummyTrackName = dummySearchData.results[0].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(0))).toBe(
      `/preview/${randomSearch}/track-1/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get the last URI when invoke the getNextTrackURI method and the number is larger than the last track", () => {
    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(20))).toBe(
      `/preview/${randomSearch}/track-10/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get previous URI when using the getPreviousTrackURI method", () => {
    const dummyTrackName = dummySearchData.results[3].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(5))).toBe(
      `/preview/${randomSearch}/track-4/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should get the same URI when invoke the getPreviousTrackURI method and is smaller than the first track index", () => {
    const dummyTrackName = dummySearchData.results[0].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(-2))).toBe(
      `/preview/${randomSearch}/track-1/${dummyTrackName}?${sortEnum.unsorted}`
    );

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(0))).toBe(
      `/preview/${randomSearch}/track-1/${dummyTrackName}?${sortEnum.unsorted}`
    );

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(1))).toBe(
      `/preview/${randomSearch}/track-1/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should always get the last track when invoke generatePreviousTrackURI is larger then the last track index", () => {
    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(11))).toBe(
      `/preview/${randomSearch}/track-10/${dummyTrackName}?${sortEnum.unsorted}`
    );
  });

  it("should not add the query string when the sortedBy property is empty", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinksGenerator({
      ...dummySearchData,
      searchTerm: randomSearch,
      sortedTracks: dummySearchData.results,
      sortedBy: "",
    });

    const dummyTrackName = dummySearchData.results[9].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(11))).toBe(
      `/preview/${randomSearch}/track-10/${dummyTrackName}`
    );
  });
});
