import styled from 'styled-components';
import BaseLink from 'components/Link/Link';

export const SHeader = styled.header`
  width: 1144px;
  margin: 0 auto;
  padding: 16px 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SUserBlock = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const SProfileLink = styled(BaseLink)`
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const SAvatar = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url(img/avatar.svg);
  background-size: 100%;
  background-repeat: no-repeat;
`;
