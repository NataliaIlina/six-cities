import styled from 'styled-components';
import { space } from 'styled-system';
import type { SpaceProps } from 'styled-system';

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 613px;
  margin-right: auto;
  margin-left: auto;
`;

export const SMap = styled.div`
  width: 100%;
  height: 579px;
  margin-bottom: 50px;
  background-image: url(img/map-big.jpg);
  background-repeat: no-repeat;
  background-size: 1144px auto;
  background-position: center top;
`;

export const SMainTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 38px;
  line-height: 1.2;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
`;

export const STitle = styled.h3<SpaceProps>`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
  color: #000;

  ${space}
`;
