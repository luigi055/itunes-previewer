import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";

class TrackDataGenerator {
  private _data: ITrackData;

  constructor(private _track: ITrack, private _searchResult: SearchSongsState) {
    const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(
      this._searchResult
    );
    const track = this._track.defineMaxLimit(this._searchResult.resultCount);

    this._data = {
      currentTrack: _searchResult.sortedTracks[track.toZeroBaseIndex()],
      nextTrackPath: mediaPlayerLinksGenerator.generateNextTrackURI(track),
      previousTrackPath: mediaPlayerLinksGenerator.generatePreviousTrackURI(
        track
      ),
      isNextButtonDisabled: track.isLastTrack(),
      isPreviousButtonDisabled: track.isFirstTrack(),
      trackNumber: track.getTrackNumber(),
    };
  }

  public getTrackData(): MediaPlayerData {
    return this._data;
  }
}

export default TrackDataGenerator;
