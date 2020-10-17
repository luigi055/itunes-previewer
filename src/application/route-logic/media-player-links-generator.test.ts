import { Random } from "test-utils";
import MediaPlayerLinksGenerator, {
  IMediaPlayerLinksGenerator,
} from "./media-player-links-generator";
import Track from "domain/track";
import { queryStringSortOptions, basePaths } from "application/routes-config";
import { dummyArtistTracks } from "test-utils/domain-dummies";

describe("testing MediaPlayerLinkGenerator class", () => {
  let randomSearch: string;
  let mediaPlayerLinks: IMediaPlayerLinksGenerator;
  const { PREVIEW } = basePaths;

  beforeEach(() => {
    randomSearch = Random.getString();
    mediaPlayerLinks = new MediaPlayerLinksGenerator({
      ...dummyArtistTracks,
      searchTerm: randomSearch,
      sortedTracks: dummyArtistTracks.results,
      sortedBy: queryStringSortOptions.unsorted,
    });
  });

  it("should get track-1 when pass in 0 to the getURIFromZeroBasedIndex method trackIndex is 1-based", () => {
    const dummyTrackName = dummyArtistTracks.results[0].trackName;

    expect(mediaPlayerLinks.generateURIFromZeroBasedPosition(0)).toBe(
      `${PREVIEW}/${randomSearch}/track-1/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get the next URI when invoke the getNextTrackURI method", () => {
    const dummyTrackName = dummyArtistTracks.results[1].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(1))).toBe(
      `${PREVIEW}/${randomSearch}/track-2/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get the same URI when invoke the getNextTrackURI method and is the last element", () => {
    const dummyTrackName = dummyArtistTracks.results[9].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(9))).toBe(
      `${PREVIEW}/${randomSearch}/track-10/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get the first track when getNextTrackURI is invoked with a number smaller than 1", () => {
    const dummyTrackName = dummyArtistTracks.results[0].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(0))).toBe(
      `${PREVIEW}/${randomSearch}/track-1/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get the last URI when invoke the getNextTrackURI method and the number is larger than the last track", () => {
    const dummyTrackName = dummyArtistTracks.results[9].trackName;

    expect(mediaPlayerLinks.generateNextTrackURI(new Track(20))).toBe(
      `${PREVIEW}/${randomSearch}/track-10/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get previous URI when using the getPreviousTrackURI method", () => {
    const dummyTrackName = dummyArtistTracks.results[3].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(5))).toBe(
      `${PREVIEW}/${randomSearch}/track-4/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should get the same URI when invoke the getPreviousTrackURI method and is smaller than the first track index", () => {
    const dummyTrackName = dummyArtistTracks.results[0].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(-2))).toBe(
      `${PREVIEW}/${randomSearch}/track-1/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(0))).toBe(
      `${PREVIEW}/${randomSearch}/track-1/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(1))).toBe(
      `${PREVIEW}/${randomSearch}/track-1/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should always get the last track when invoke generatePreviousTrackURI is larger then the last track index", () => {
    const dummyTrackName = dummyArtistTracks.results[9].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(11))).toBe(
      `${PREVIEW}/${randomSearch}/track-10/${dummyTrackName}?${queryStringSortOptions.unsorted}`
    );
  });

  it("should not add the query string when the sortedBy property is empty", () => {
    const randomSearch = Random.getString();
    const mediaPlayerLinks = new MediaPlayerLinksGenerator({
      ...dummyArtistTracks,
      searchTerm: randomSearch,
      sortedTracks: dummyArtistTracks.results,
      sortedBy: "",
    });

    const dummyTrackName = dummyArtistTracks.results[9].trackName;

    expect(mediaPlayerLinks.generatePreviousTrackURI(new Track(11))).toBe(
      `${PREVIEW}/${randomSearch}/track-10/${dummyTrackName}`
    );
  });
});
