import { css } from 'styled-components';
import rubikLightWoff2 from 'src/assets/fonts/rubik-light.woff2';
import rubikLightWoff from 'src/assets/fonts/rubik-light.woff';

import rubikRegularWoff2 from 'src/assets/fonts/rubik-regular.woff2';
import rubikRegularWoff from 'src/assets/fonts/rubik-regular.woff';

import rubikMediumWoff2 from 'src/assets/fonts/rubik-medium.woff2';
import rubikMediumWoff from 'src/assets/fonts/rubik-medium.woff';

import rubikBoldWoff2 from 'src/assets/fonts/rubik-bold.woff2';
import rubikBoldWoff from 'src/assets/fonts/rubik-bold.woff';

const fonts = css`
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 300;
    src: url(${rubikLightWoff2}) format('woff2'), url(${rubikLightWoff}) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 400;
    src: url(${rubikRegularWoff2}) format('woff2'), url(${rubikRegularWoff}) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 500;
    src: url(${rubikMediumWoff2}) format('woff2'), url(${rubikMediumWoff}) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 700;
    src: url(${rubikBoldWoff2}) format('woff2'), url(${rubikBoldWoff}) format('woff');
    font-display: swap;
  }
`;

export default fonts;
