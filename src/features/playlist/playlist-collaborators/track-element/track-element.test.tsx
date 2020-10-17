import React from "react";
import { render, screen } from "@testing-library/react";
import { ConnectedComponent, Random } from "utils/test";
import TrackElement, { formatPrice, formatToMinutes } from "./track-element";
import { dummyArtistTracks } from "utils/test/domain-dummies";

const playlistLinkTestId = "playlist-link";

describe("testing small helper functions for TrackElement Component", () => {
  describe("Testing formatPrice", () => {
    const randomPrice = Random.getNumber();
    const EUR = "EUR";
    const USD = "USD";

    it.each([
      [randomPrice, EUR, `${randomPrice}€`],
      [randomPrice, USD, `${randomPrice}$`],
      [randomPrice * -1, USD, "Free"],
      [randomPrice * -1, EUR, "Free"],
    ])(
      "should return the price formatted of %s with the currency %s",
      (price: number, currency: string, expectedString: string) => {
        const formattedPrice = formatPrice(price, currency);

        expect(formattedPrice).toBe(expectedString);
      }
    );
  });

  describe("Testing formatToMinutes", () => {
    it.each([
      [60000, "1:00"],
      [90000, "1:30"],
      [160000, "2:40"],
    ])(
      "should convert %s to %s",
      (milliseconds: number, expectedFormattedMinutes: string) => {
        const formattedMinutes = formatToMinutes(milliseconds);

        expect(formattedMinutes).toBe(expectedFormattedMinutes);
      }
    );
  });
});

describe("Testing the TrackElement component", () => {
  let randomPath: string;
  const dummyTrackData = dummyArtistTracks.results[0];
  beforeEach(() => {
    randomPath = Random.getString();
    render(
      <ConnectedComponent>
        <TrackElement trackData={dummyTrackData} trackPath={randomPath} />
      </ConnectedComponent>
    );
  });

  it("should show the correct url data correctly", () => {
    const { getByTestId } = screen;

    expect(getByTestId(playlistLinkTestId).href).toContain(randomPath);
  });

  it("should show the data correctly", () => {
    const { getByText } = screen;

    expect(getByText(dummyTrackData.trackName)).toBeInTheDocument();
    expect(getByText(dummyTrackData.collectionName)).toBeInTheDocument();
    expect(getByText(dummyTrackData.artistName)).toBeInTheDocument();
    expect(getByText(dummyTrackData.genre)).toBeInTheDocument();
    expect(
      getByText(formatPrice(dummyTrackData.trackPrice, dummyTrackData.currency))
    ).toBeInTheDocument();
    expect(
      getByText(formatToMinutes(dummyTrackData.trackTimeMillis))
    ).toBeInTheDocument();
  });

  it("should show the thumbnail correctly", () => {
    const { getByTestId } = screen;

    expect(getByTestId("playlist-thumbnail").src).toContain(
      dummyTrackData.artworkUrl60
    );
  });
});
