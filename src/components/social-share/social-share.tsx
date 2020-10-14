import { WhatsApp, Facebook, Twitter } from "components/icons";
import React, { FunctionComponent } from "react";

const SocialShare: FunctionComponent<{ shareURL?: string }> = ({
  shareURL = "",
}) => (
  <div>
    <a
      href={`whatsapp://send?text=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsApp />
    </a>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Facebook />
    </a>
    <a
      href={`https://twitter.com/share?url=${shareURL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Twitter />
    </a>
  </div>
);

export default SocialShare;
