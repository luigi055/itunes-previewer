import React, { useEffect, useMemo } from "react";
import { AudioPlayer, Cover, SocialShare } from "components";
import Track from "domain/track";
import DomainHeader from "features/domain-header";
import { fetchTrackData, goToTrack } from "features/media-player";
import {
  selectCurrentTrack,
  selectIsNextButtonDisabled,
  selectIsPreviousButtonDisabled,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "features/media-player/media-player-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Player } from "./preview.styled";

const Preview = () => {
  const { trackNumber } = useParams() as DomainURIParams;
  const { href } = window.location;
  const trackIndex = parseInt(
    trackNumber!.slice(trackNumber!.indexOf("-") + 1)
  );
  const track = useMemo(() => new Track(trackIndex), [trackIndex]);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentTrack = useSelector(selectCurrentTrack);
  const nextTrackPath = useSelector(selectNextTrackPath);
  const previousTrackPath = useSelector(selectPreviousTrackPath);
  const isNextButtonDisabled = useSelector(selectIsNextButtonDisabled);
  const isPreviousButtonDisabled = useSelector(selectIsPreviousButtonDisabled);

  useEffect(() => {
    dispatch(fetchTrackData(track.getTrackNumber()));
  }, [dispatch, track]);

  const handlePreviousButtonClick = () => {
    dispatch(goToTrack(track.getTrackNumber() - 1));
    history.replace(previousTrackPath);
  };

  const handleNextButtonClick = () => {
    dispatch(goToTrack(track.getTrackNumber() + 1));
    history.replace(nextTrackPath);
  };

  return (
    <>
      <DomainHeader />
      <Cover currentTrack={currentTrack} />
      <Player>
        <AudioPlayer
          className="audio-player"
          currentTrackURL={currentTrack.previewUrl}
          isNextButtonDisabled={isNextButtonDisabled}
          isPreviousButtonDisabled={isPreviousButtonDisabled}
          onPreviousButtonClick={handlePreviousButtonClick}
          onNextButtonClick={handleNextButtonClick}
        />
        <SocialShare
          className="social-share"
          data-testid="social-share-component"
          shareURL={href}
        />
      </Player>
    </>
  );
};

export default Preview;
