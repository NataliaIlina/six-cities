import React from 'react';
import BaseLink from 'components/BaseLink/BaseLink';
import { BASE_URL } from 'src/constants';
import { SFooter } from './Footer.styled';

const Footer: React.FC = () => (
  <SFooter>
    <BaseLink to="/">
      <img src={`${BASE_URL}/img/logo.svg`} alt="6 cities logo" width="64" height="33" />
    </BaseLink>
  </SFooter>
);

export default Footer;
