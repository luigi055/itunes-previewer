import React from "react";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import AudioPlayer from "./audio-player";
import { dummySearchData } from "services/externals/itunes-api/mock";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import userEvent from "@testing-library/user-event";
import Track from "domain/track";

describe("Testing AudioPlayer component", () => {
  const playerReproduceTestId = "player-reproduce-button";
  const playerPlayIconTestId = "player-play-icon";
  const playerPauseIconTestId = "player-pause-icon";
  const playerSourceTestId = "player-source";
  const playerGoPreviousButtonTestId = "player-go-previous-button";
  const playerGoNextButtonTestId = "player-go-next-button";
  const playerAudioElementTestId = "player-audio-element";
  const mediaPlayerLinks = new MediaPlayerLinksGenerator(
    { ...dummySearchData, searchTerm: "" },
  );

  beforeEach(() => {
    /**
     * It is needed to add the play and pause method to the HTMLMediaElement
     * since neither Audio nor Video tags are well supported by jsdom
     * also it is needed to emulate the onPlaying and onPause events
     * to test some behavior.
     */
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });
  let dummyPreviewURL: string;
  let nextTrackPath: string;
  let previousTrackPath: string;
  beforeEach(() => {
    const track = new Track(1);
    dummyPreviewURL =
      dummySearchData.results[track.toZeroBaseIndex()].previewUrl;
    nextTrackPath = mediaPlayerLinks.generateNextTrackURI(track);
    previousTrackPath = mediaPlayerLinks.generatePreviousTrackURI(track);
  });

  describe("testing play/pause button", () => {
    it("should reproduce the correct URL", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId } = screen;

      expect(getByTestId(playerSourceTestId).src).toContain(
        `/${dummyPreviewURL}`,
      );
    });

    it("should show the Play icon by default since the player is paused by default", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId, queryByTestId } = screen;

      expect(getByTestId(playerPlayIconTestId)).toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).not.toBeInTheDocument();
    });

    it("should show the play icon when the onPlaying event is invoked", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId, queryByTestId } = screen;

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {}),
      );

      expect(queryByTestId(playerPlayIconTestId)).not.toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).toBeInTheDocument();
    });

    it("should show the pause icon again when the player is reproducing the song and onPause event is invoked", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId, queryByTestId } = screen;

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {}),
      );

      expect(queryByTestId(playerPlayIconTestId)).not.toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).toBeInTheDocument();

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.pause(getByTestId(playerAudioElementTestId), {}),
      );

      expect(queryByTestId(playerPlayIconTestId)).toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).not.toBeInTheDocument();
    });

    it("should invoke the play method", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId } = screen;

      /**
           * Click to play the audio player
           * It is needed to click and also to update the component local state
           * this is needed since neither Audio nor Video tags are full supported by JSDOM
           */
      userEvent.click(getByTestId(playerReproduceTestId));
      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {}),
      );

      userEvent.click(getByTestId(playerReproduceTestId));
      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.pause(getByTestId(playerAudioElementTestId), {}),
      );

      expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
      expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1);
    });
  });

  describe("testing previous and next buttons", () => {
    it("should redirect to the next track URI", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId } = screen;

      const playerGoNextButton = getByTestId(playerGoNextButtonTestId);

      expect(playerGoNextButton.href).toContain(nextTrackPath);
    });
    it("should redirect to the previous track URI", () => {
      render(
        <AudioPlayer
          currentTrackURL={dummyPreviewURL}
          nextTrackPath={nextTrackPath}
          previousTrackPath={previousTrackPath}
        />,
      );
      const { getByTestId } = screen;

      const playerGoPreviousButton = getByTestId(playerGoPreviousButtonTestId);

      expect(playerGoPreviousButton.href).toContain(previousTrackPath);
    });
  });
});
