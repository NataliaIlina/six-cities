import styled from 'styled-components';

export const SOffersGallery = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 784px;
  margin: 0 auto 30px;
  max-height: 452px;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    width: 34px;
    height: 100%;
    background-image: url(img/triangle.svg);
    background-repeat: no-repeat;
    background-size: 34px 452px;
  }

  &::before {
    left: 0;
    transform: rotate(180deg);
  }
`;

export const SOfferImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 2px;
  width: 260px;
  height: 200px;
  overflow: hidden;

  &:nth-child(3n) {
    margin-right: 0;
  }

  img {
    display: block;
    min-width: 100%;
    min-height: 100%;
    flex-grow: 1;
  }
`;
