interface IMediaPlayerLinks {
  getNextTrackURI(currentTrack: number): string;
  getPreviousTrackURI(currentTrack: number): string;
  getURIByTrackIndex(trackNumber: number): string;
}

class MediaPlayerLinks implements IMediaPlayerLinks {
  private _baseURLPath = "/preview/track-";

  constructor(private _searchResult: SearchSongsState) {}

  private _generateURI(trackNumber: number): string {
    const { results, searchTerm } = this._searchResult;
    const trackName = results[trackNumber].trackName;

    return `${this._baseURLPath}${trackNumber}/${trackName}?${searchTerm}`;
  }

  public getURIByTrackIndex(trackNumber: number) {
    return this._generateURI(trackNumber);
  }

  public getNextTrackURI(currentTrack: number) {
    const { resultCount } = this._searchResult;
    const lastIndex = resultCount - 1;
    const nextTrackIndex = (currentTrack < lastIndex)
      ? currentTrack + 1
      : lastIndex;

    return this._generateURI(nextTrackIndex);
  }

  public getPreviousTrackURI(currentTrack: number) {
    const previousTrackIndex = (currentTrack > 0) ? currentTrack - 1 : 0;

    return this._generateURI(previousTrackIndex);
  }
}

export default MediaPlayerLinks;
