import { createGlobalStyle } from 'styled-components';

import fonts from 'src/assets/styles/fonts';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  ${fonts};

  body,
  html {
    width: 100%;
    min-width: 1144px;
    margin: 0;
    padding: 0;
    font-family: rubik, arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.15;
    color: #383838;
    background-color: #f5f5f5;
    box-sizing: border-box;
  };

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  };

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s, opacity 0.3s;
    cursor: pointer;
    outline: 0;
  };

  textarea {
    resize: none;
  };

  img {
    max-width: 100%;
    height: auto;
  };
`;

export default GlobalStyles;
