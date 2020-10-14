import React, { FunctionComponent } from "react";

interface CoverInformationProps {
  currentTrack: ArtistSongs;
}

const Cover: FunctionComponent<CoverInformationProps> = ({ currentTrack }) => {
  return (
    <div>
      <img
        data-testid="cover-image"
        src={currentTrack.artworkUrl100}
        alt={`${currentTrack.collectionName} cover`}
      />

      <p data-testid="cover-track-name">{currentTrack.trackName}</p>
      <h3 data-testid="cover-artist-name">{currentTrack.artistName}</h3>
    </div>
  );
};

export default Cover;
