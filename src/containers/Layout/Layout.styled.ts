import styled, {css} from 'styled-components';
import {background} from 'styled-system';
import type {BackgroundProps} from 'styled-system';

export const SLayout = styled.div<BackgroundProps>`
  background-color: #ffffff;

  ${background}
`;

export const SContent = styled.div.withConfig<{withImage: boolean}>({
  shouldForwardProp: (prop) => prop !== 'withImage',
})`
  display: flex;
  flex-direction: column;
  width: 1144px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;

  ${(props) =>
    props.withImage &&
    css`
      background-image: linear-gradient(to right, #f5f5f5 509px, transparent 509px),
        url(img/amsterdam.jpg);
      background-position: top left, right top;
      background-repeat: no-repeat, no-repeat;
      background-size: auto, auto 100%;
    `}
`;
