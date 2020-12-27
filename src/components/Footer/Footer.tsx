import React from 'react';
import BaseLink from 'components/Link/Link';
import {BASE_URL} from 'src/constants';

const Footer: React.FC = () => (
  <footer className="footer container">
    <BaseLink className="footer__logo-link" to="/">
      <img
        className="footer__logo"
        src={`${BASE_URL}/img/logo.svg`}
        alt="6 cities logo"
        width="64"
        height="33"
      />
    </BaseLink>
  </footer>
);

export default Footer;
