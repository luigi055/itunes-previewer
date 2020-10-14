import React from 'react';
import { screen, render } from '@testing-library/react';
import { Random } from "test-utils";
import SocialShare from "./social-share";
import { hiddenMessages, shareURLs } from './social-share-constants';

describe("Testing the social share component", () => {
  const twitterLinkTestId = "twitter-link";
  const facebookLinkTestId = "facebook-link";
  const whatsappLinkTestId = "whatsapp-link";
  const twitterHiddenMessageTestid = "twitter-hidden-message";
  const facebookHiddenMessageTestid = "facebook-hidden-message";
  const whatsappHiddenMessageTestid = "whatsapp-hidden-message";
  const twitterIconTestid = "twitter-icon";
  const facebookIconTestid = "facebook-icon";
  const whatsappIconTestid = "whatsapp-icon";

  let randomURL: string;

  describe("shareURL is empty (default value)", () => {

    it("the not add any share url to the links when the shareURL parameter is not passed", () => {
      render(<SocialShare />);
      const {getByTestId} = screen;
      
      expect(getByTestId(facebookLinkTestId).href).toBe(shareURLs.facebookURL);
      expect(getByTestId(twitterLinkTestId).href).toBe(shareURLs.twitterURL);
      expect(getByTestId(whatsappLinkTestId).href).toBe(shareURLs.whatsappURL);
    })
  })

  describe("specifying the shareURL property", ()=> {
    
    beforeEach(() => {
      randomURL = Random.getString();
      
      render(<SocialShare shareURL={randomURL}/>);
    });
    
    it("should show the correct url, icon and hidden message for the facebook Link", () => {
      const {getByTestId} = screen;
      
      expect(getByTestId(facebookLinkTestId).href).toBe(`${shareURLs.facebookURL}${randomURL}`);
      expect(getByTestId(facebookHiddenMessageTestid).textContent).toBe(`${hiddenMessages.facebookHiddenMessage}`);
      expect(getByTestId(facebookIconTestid)).toBeInTheDocument();
    });
    
    it("should show the correct url, icon and hidden message for the twitter Link", () => {
      const {getByTestId} = screen;
      
      expect(getByTestId(twitterLinkTestId).href).toBe(`${shareURLs.twitterURL}${randomURL}`);
      expect(getByTestId(twitterHiddenMessageTestid).textContent).toBe(`${hiddenMessages.twitterHiddenMessage}`);
    expect(getByTestId(twitterIconTestid)).toBeInTheDocument();
  });
  
  it("should show the correct url, icon and hidden message for the whatsapp Link", () => {
    const {getByTestId} = screen;
    
    expect(getByTestId(whatsappLinkTestId).href).toBe(`${shareURLs.whatsappURL}${randomURL}`);
    expect(getByTestId(whatsappHiddenMessageTestid).textContent).toBe(`${hiddenMessages.whatsappHiddenMessage}`);
    expect(getByTestId(whatsappIconTestid)).toBeInTheDocument();
  });
});

})
