import React from "react";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import AudioPlayer from "./audio-player";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import Track from "domain/track";
import { ConnectedComponent } from "utils/test";
import { dummyArtistTracks } from "utils/test/domain-dummies";

describe("Testing AudioPlayer component", () => {
  const playerReproduceTestId = "player-reproduce-button";
  const playerPlayIconTestId = "player-play-icon";
  const playerPauseIconTestId = "player-pause-icon";
  const playerAudioTestId = "player-audio-element";
  const playerGoPreviousButtonTestId = "player-go-previous-button";
  const playerGoNextButtonTestId = "player-go-next-button";
  const playerAudioElementTestId = "player-audio-element";
  const playerPreviousIconDisabledTestId = "player-previous-icon-disabled";
  const playerPreviousIconEnabledTestId = "player-previous-icon-enabled";
  const playerNextIconEnabledTestId = "player-next-icon-enabled";
  const playerNextIconDisabledTestId = "player-next-icon-disabled";

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
  beforeEach(() => {
    const track = new Track(1);
    dummyPreviewURL =
      dummyArtistTracks.results[track.toZeroBaseIndex()].previewUrl;
  });

  describe("testing play/pause button", () => {
    it("should reproduce the correct URL", () => {
      const { getByTestId } = screen;

      expect(getByTestId(playerAudioTestId).src).toContain(
        `/${dummyPreviewURL}`
      );
    });

    beforeEach(() => {
      render(
        <ConnectedComponent>
          <AudioPlayer
            currentTrackURL={dummyPreviewURL}
            onPreviousButtonClick={jest.fn()}
            onNextButtonClick={jest.fn()}
          />
        </ConnectedComponent>
      );
    });

    it("should show the Play icon by default since the player is paused by default", () => {
      const { getByTestId, queryByTestId } = screen;

      expect(getByTestId(playerPlayIconTestId)).toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).not.toBeInTheDocument();
    });

    it("should show the play icon when the onPlaying event is invoked", () => {
      const { getByTestId, queryByTestId } = screen;

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {})
      );

      expect(queryByTestId(playerPlayIconTestId)).not.toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).toBeInTheDocument();
    });

    it("should show the pause icon again when the player is reproducing the song and onPause event is invoked", () => {
      const { getByTestId, queryByTestId } = screen;

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {})
      );

      expect(queryByTestId(playerPlayIconTestId)).not.toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).toBeInTheDocument();

      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.pause(getByTestId(playerAudioElementTestId), {})
      );

      expect(queryByTestId(playerPlayIconTestId)).toBeInTheDocument();
      expect(queryByTestId(playerPauseIconTestId)).not.toBeInTheDocument();
    });

    it("should invoke the play method", () => {
      const { getByTestId } = screen;

      /**
       * Click to play the audio player
       * It is needed to click and also to update the component local state
       * this is needed since neither Audio nor Video tags are full supported by JSDOM
       */
      userEvent.click(getByTestId(playerReproduceTestId));
      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.playing(getByTestId(playerAudioElementTestId), {})
      );

      userEvent.click(getByTestId(playerReproduceTestId));
      fireEvent(
        getByTestId(playerAudioElementTestId),
        createEvent.pause(getByTestId(playerAudioElementTestId), {})
      );

      expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
      expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1);
    });
  });

  describe("testing previous and next buttons", () => {
    let handlePreviousButtonSpy: Function;
    let handleNextButtonSpy: Function;
    let history: any;

    describe("Testing the base buttons redirection and required properties", () => {
      beforeEach(() => {
        handlePreviousButtonSpy = jest.fn();
        handleNextButtonSpy = jest.fn();
        history = createMemoryHistory();
        render(
          <ConnectedComponent history={history}>
            <AudioPlayer
              currentTrackURL={dummyPreviewURL}
              onPreviousButtonClick={jest.fn()}
              onNextButtonClick={jest.fn()}
            />
          </ConnectedComponent>
        );
      });

      it("should both buttons be enabled by default ", () => {
        const { getByTestId } = screen;

        const playerGoPreviousIconEnabled = getByTestId(
          playerPreviousIconEnabledTestId
        );
        const playerGoNextIconEnabled = getByTestId(
          playerNextIconEnabledTestId
        );

        expect(playerGoPreviousIconEnabled).toBeInTheDocument();
        expect(playerGoNextIconEnabled).toBeInTheDocument();
      });
    });
    describe("Testing events", () => {
      beforeEach(() => {
        handlePreviousButtonSpy = jest.fn();
        handleNextButtonSpy = jest.fn();
        render(
          <ConnectedComponent>
            <AudioPlayer
              currentTrackURL={dummyPreviewURL}
              onPreviousButtonClick={handlePreviousButtonSpy}
              onNextButtonClick={handleNextButtonSpy}
            />
          </ConnectedComponent>
        );
      });

      it("should invoke the onPreviousButtonClick event when user clicks on previous button", () => {
        const { getByTestId } = screen;

        const playerGoPreviousButton = getByTestId(
          playerGoPreviousButtonTestId
        );

        userEvent.click(playerGoPreviousButton);

        expect(handlePreviousButtonSpy).toHaveBeenCalled();
      });

      it("should invoke the onNextButtonClick event when user clicks on previous button", () => {
        const { getByTestId } = screen;

        const playerGoNextButton = getByTestId(playerGoNextButtonTestId);

        userEvent.click(playerGoNextButton);

        expect(handleNextButtonSpy).toHaveBeenCalled();
      });
    });

    describe("Testing button disable", () => {
      it("should disable the previous button when isPreviousButtonDisabled is true ", () => {
        render(
          <ConnectedComponent>
            <AudioPlayer
              currentTrackURL={dummyPreviewURL}
              isPreviousButtonDisabled={true}
              onPreviousButtonClick={jest.fn()}
              onNextButtonClick={jest.fn()}
            />
          </ConnectedComponent>
        );
        const { getByTestId } = screen;

        const playerGoPreviousIconDisabled = getByTestId(
          playerPreviousIconDisabledTestId
        );
        const playerGoNextIconEnabled = getByTestId(
          playerNextIconEnabledTestId
        );

        expect(playerGoPreviousIconDisabled).toBeInTheDocument();
        expect(playerGoNextIconEnabled).toBeInTheDocument();
      });

      it("should disable the next button when isNextButtonDisabled is true ", () => {
        render(
          <ConnectedComponent>
            <AudioPlayer
              currentTrackURL={dummyPreviewURL}
              isNextButtonDisabled={true}
              onPreviousButtonClick={jest.fn()}
              onNextButtonClick={jest.fn()}
            />
          </ConnectedComponent>
        );
        const { getByTestId } = screen;

        const playerGoNextIconDisabled = getByTestId(
          playerNextIconDisabledTestId
        );
        const playerGoPreviousIconEnabled = getByTestId(
          playerPreviousIconEnabledTestId
        );

        expect(playerGoNextIconDisabled).toBeInTheDocument();
        expect(playerGoPreviousIconEnabled).toBeInTheDocument();
      });
    });
  });
});
