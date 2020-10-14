import React, { FunctionComponent, HTMLAttributes } from "react";
import { WhatsApp, Facebook, Twitter } from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
import { hiddenMessages, shareURLs} from './social-share-constants';
import { SocialShareWrapper } from "./social-share-styled";

const SocialShare: FunctionComponent<
  { shareURL?: string } & HTMLAttributes<HTMLDivElement>
> = ({ shareURL = "", ...props }) => (
  <SocialShareWrapper {...props}>
    <a
      href={`${shareURLs.twitterURL}${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
      data-testid="twitter-link"
    >
      <Twitter data-testid="twitter-icon"/>
<ScreenReaderOnly data-testid="twitter-hidden-message">{hiddenMessages.twitterHiddenMessage}</ScreenReaderOnly>
    </a>
    <a
      href={`${shareURLs.facebookURL}${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
      data-testid="facebook-link"
    >
      <Facebook data-testid="facebook-icon" />
      <ScreenReaderOnly data-testid="facebook-hidden-message">{hiddenMessages.facebookHiddenMessage}</ScreenReaderOnly>
    </a>
    <a
      href={`${shareURLs.whatsappURL}${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
      data-testid="whatsapp-link"
    >
      <WhatsApp data-testid="whatsapp-icon" />
      <ScreenReaderOnly data-testid="whatsapp-hidden-message">{hiddenMessages.whatsappHiddenMessage}</ScreenReaderOnly>
    </a>
  </SocialShareWrapper>
);

export default SocialShare;
