class ItunesAdapter {
  constructor(private _itunesData : ITunesSearchResult){}

  adaptModel():IArtistTracks {
    const adaptedTracks = this._itunesData.results.map((itunesTrack:ITunesTrack) => ({
      trackId: itunesTrack.trackId,
      trackName: itunesTrack.trackName,
      artistName: itunesTrack.artistName,
      collectionName: itunesTrack.collectionName,
      trackTimeMillis: itunesTrack.trackTimeMillis,
      genre: itunesTrack.primaryGenreName,
      trackPrice: itunesTrack.trackPrice,
      currency: itunesTrack.currency,
      previewUrl: itunesTrack.previewUrl,
      artworkUrl60: itunesTrack.artworkUrl60,
      artworkUrl100: itunesTrack.artworkUrl100,
    }));

    return {
      resultCount: adaptedTracks.length,
      results: adaptedTracks
    }
  }
}


export default ItunesAdapter;
