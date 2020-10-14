class Track implements ITrack {
  private _maxLimit: number;
  constructor(private _trackNumber: number) {
    this._maxLimit = Infinity;
  }

  public defineMaxLimit(maxLimit: number = Infinity): Track {
    this._maxLimit = maxLimit;
    return this;
  }

  public toZeroBaseIndex(): number {
    const trackNumber = this._trackNumber;

    return trackNumber <= 1 ? 0 : Math.min(trackNumber, this._maxLimit) - 1;
  }

  public getTrackNumber(): number {
    return this._trackNumber;
  }

  public isFirstTrack(): boolean {
    return this._trackNumber <= 1;
  }

  public isLastTrack(): boolean {
    return this._trackNumber >= this._maxLimit;
  }
}

export default Track;
