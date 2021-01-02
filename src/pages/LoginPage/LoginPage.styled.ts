import styled from 'styled-components';
import { Flex } from 'reflexbox';

export const SWrapper = styled(Flex)`
  flex-grow: 1;
`;

export const SLoginForm = styled.div`
  position: relative;
  width: 520px;
  padding: 160px 58px 24px;
  padding-right: 72px;

  &::after {
    content: '';
    position: absolute;
    width: 110px;
    height: 100vh;
    bottom: 0;
    right: -44px;
    background-color: #f5f5f5;
    border-right: 6px solid #4481c3;
    -webkit-transform: skew(-6.5deg);
    transform: skew(-6.5deg);
  }
`;

export const STitle = styled.h1`
  margin-top: 0;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  font-style: oblique;
`;
