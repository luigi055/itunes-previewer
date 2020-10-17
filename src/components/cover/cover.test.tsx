import React from "react";
import { render, screen } from "@testing-library/react";
import Cover from "./cover";
import { dummyArtistTracks } from "test-utils/domain-dummies";

describe("Testing the Cover component", () => {
  const coverImageTestId = "cover-image";
  const coverTrackNameTestId = "cover-track-name";
  const coverArtistNameTestId = "cover-artist-name";
  const dummyCurrentTrack = dummyArtistTracks.results[0];

  beforeEach(() => {
    render(<Cover currentTrack={dummyCurrentTrack} />);
  });

  it("should show the correct thumbnail, the current track", () => {
    const { getByTestId } = screen;

    expect(getByTestId(coverImageTestId).src).toContain(
      `/${dummyCurrentTrack.artworkUrl100}`
    );
  });

  it("should show the correct title and artist name of the current track", () => {
    const { getByTestId } = screen;

    expect(getByTestId(coverTrackNameTestId).textContent).toBe(
      dummyCurrentTrack.trackName
    );
    expect(getByTestId(coverArtistNameTestId).textContent).toBe(
      dummyCurrentTrack.artistName
    );
  });
});
