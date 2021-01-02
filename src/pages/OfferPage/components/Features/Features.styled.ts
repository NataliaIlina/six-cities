import styled from 'styled-components';

export const SFeatures = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 32px;

  & li {
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-right: 64px;
    }
  }

  & svg {
    display: inline-block;
    margin-right: 4px;
  }
`;
