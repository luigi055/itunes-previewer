import { CenteredMainElement } from "components/layout";
import { DesignH3 } from "components/typography";
import React, { FunctionComponent } from "react";
import { CoverElement } from "./cover.styled";

interface CoverInformationProps {
  currentTrack: ArtistSongs;
}

const Cover: FunctionComponent<CoverInformationProps> = ({ currentTrack }) => {
  return (
    <CenteredMainElement>
      <CoverElement>
        <img
          data-testid="cover-image"
          src={currentTrack.artworkUrl100}
          alt={`${currentTrack.collectionName} cover`}
        />

        <DesignH3 data-testid="cover-track-name">
          {currentTrack.trackName}
        </DesignH3>
        <DesignH3 isFontWeightNormal data-testid="cover-artist-name">
          {currentTrack.artistName}
        </DesignH3>
      </CoverElement>
    </CenteredMainElement>
  );
};

export default Cover;
