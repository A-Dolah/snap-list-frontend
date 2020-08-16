import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <p>
      <i className="fas fa" /> Created by{' '}
      <a href="https://adamdolah.com" target="_blank" rel="noopener noreferrer">
        Adam Dolah
      </a>
    </p>
  </FooterStyles>
);

export default Footer;
