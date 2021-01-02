import styled from 'styled-components';
import type { HeightProps, WidthProps } from 'styled-system';

export const SStars = styled.div<WidthProps & HeightProps>`
  position: relative;
  display: block;
  font-size: 0;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(img/stars.svg) transparent no-repeat center;
    width: ${(props) => `${props.width}px`};
    background-size: ${(props) => `${props.width}px ${props.height}px`};
  }

  & span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 100%;
    overflow: hidden;
  }

  & span::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(img/stars-active.svg) transparent no-repeat center;
    width: ${(props) => `${props.width}px`};
    background-size: ${(props) => `${props.width}px ${props.height}px`};
  }
`;

export const SValue = styled.span`
  margin-left: 5px;
  padding-top: 2px;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  font-style: oblique;
`;
