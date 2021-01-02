import styled, { css } from 'styled-components';

export const SUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  padding-right: 16px;
`;

export const SUserName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

export const SUserStatus = styled.span`
  font-size: 12px;
  color: #696969;
`;

export const SDescription = styled.p`
  margin-top: 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 48px;
`;

export const SAvatar = styled.div<{ isPro: boolean }>`
  background-image: url(img/avatar.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  width: 74px;
  min-width: 74px;
  height: 74px;
  margin-bottom: 8px;

  ${(props) =>
    props.isPro &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: -3px;
        right: -16px;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        background-color: #ff9000;
        background-image: url(img/star-white.svg);
        background-size: 20px 19px;
        background-position: center 6px;
        background-repeat: no-repeat;
      }
    `}

  & img {
    border-radius: 50%;
  }
`;
