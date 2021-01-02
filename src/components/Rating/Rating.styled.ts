import styled from 'styled-components';

export const SStars = styled.div`
  position: relative;
  display: block;
  font-size: 0;
  width: 147px;
  height: 24px;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(img/stars.svg) transparent no-repeat center;
    width: 147px;
    background-size: 147px 24px;
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
    width: 147px;
    background-size: 147px 24px;
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
