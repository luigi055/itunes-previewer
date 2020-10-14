import { WhatsApp, Facebook, Twitter } from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

const SocialShareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    padding: 10px;
  }
`;

const SocialShare: FunctionComponent<{ shareURL?: string }> = ({
  shareURL = "",
}) => (
  <SocialShareWrapper>
    <a
      href={`whatsapp://send?text=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsApp />
      <ScreenReaderOnly>Share song on whatsapp</ScreenReaderOnly>
    </a>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Facebook />
      <ScreenReaderOnly>Share song on facebook</ScreenReaderOnly>
    </a>
    <a
      href={`https://twitter.com/share?url=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Twitter />
      <ScreenReaderOnly>Share song on twitter</ScreenReaderOnly>
    </a>
  </SocialShareWrapper>
);

export default SocialShare;
