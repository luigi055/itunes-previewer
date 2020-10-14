import { WhatsApp, Facebook, Twitter } from 'components/icons';
import React from 'react';

const SocialShare = () => (
  <div>
    <a
      href="whatsapp://send?text=Your message here"
      rel="noopener noreferrer"
      target="_blank">
       <WhatsApp />
    </a>
    <a
      href="."
      rel="noopener noreferrer"
      target="_blank">
       <Facebook />
    </a>
    <a
      href="."
      rel="noopener noreferrer"
      target="_blank">
       <Twitter />
    </a>
  </div>
  );

export default SocialShare;
