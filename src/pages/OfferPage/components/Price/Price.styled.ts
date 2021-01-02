import styled from 'styled-components';

export const SPrice = styled.div`
  position: relative;
  margin-bottom: 56px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 18px;
    left: calc(100% + 12px);
    width: 345px;
    height: 1px;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.01), #7ca7d5);
  }

  &::after {
    left: auto;
    right: calc(100% + 12px);
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.01), #6899ce);
  }
`;

export const SValue = styled.b`
  position: relative;
  padding-right: 8px;
  padding-left: 8px;
  font-size: 32px;
  font-weight: 700;
  font-style: oblique;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    right: -2px;
    height: 52px;
    width: 2px;
    background-color: #4481c3;
    transform: skew(-12deg);
  }
`;

export const SText = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-style: oblique;
  opacity: 0.48;
`;
