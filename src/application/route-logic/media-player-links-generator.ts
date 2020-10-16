import { basePaths } from "application/routes-config";
export interface IMediaPlayerLinksGenerator {
  generateNextTrackURI(currentTrack: ITrack): string;
  generatePreviousTrackURI(currentTrack: ITrack): string;
  generateURIFromZeroBasedPosition(trackNumber: number): string;
}

class MediaPlayerLinksGenerator implements IMediaPlayerLinksGenerator {
  private _baseURLPath = "/preview/track-";

  constructor(private _searchResult: SearchSongsState) {}

  private _composeURI(trackNumber: number, arrayIndex: number = 0): string {
    const { sortedTracks, searchTerm, sortedBy } = this._searchResult;
    const trackName = sortedTracks[arrayIndex].trackName;
    const prettifiedSortedBy = sortedBy ? `?${sortedBy}` : "";

    return `${basePaths.PREVIEW}/${searchTerm}/track-${trackNumber}/${trackName}${prettifiedSortedBy}`;
  }

  private _toZeroBased(oneBased: number) {
    return oneBased - 1;
  }

  public generateURIFromZeroBasedPosition(trackNumber: number) {
    return this._composeURI(trackNumber + 1, trackNumber);
  }

  public generateNextTrackURI(currentTrack: ITrack) {
    const { resultCount } = this._searchResult;
    const trackNumber = currentTrack.getTrackNumber();
    const nextTrackIndex =
      trackNumber < resultCount ? Math.max(trackNumber, 0) + 1 : resultCount;

    return this._composeURI(nextTrackIndex, this._toZeroBased(nextTrackIndex));
  }

  public generatePreviousTrackURI(currentTrack: ITrack) {
    const { resultCount } = this._searchResult;
    const trackNumber = currentTrack.getTrackNumber();
    const lastTrack = resultCount + 1;
    const previousTrackIndex =
      trackNumber <= 1 ? 1 : Math.min(trackNumber, lastTrack) - 1;

    return this._composeURI(
      previousTrackIndex,
      this._toZeroBased(previousTrackIndex)
    );
  }
}

export default MediaPlayerLinksGenerator;
