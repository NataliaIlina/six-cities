import styled from 'styled-components';

export const SWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding-left: 58px;
  padding-right: 58px;
`;

export const SOffersSection = styled.div`
  width: 572px;
  padding: 16px;
  padding-left: 0;
  overflow-y: auto;
`;

export const SOffersTitle = styled.b`
  display: block;
  margin-bottom: 22px;
  font-size: 24px;
  font-weight: 700;
  font-style: oblique;
`;

export const SMapSection = styled.div`
  display: flex;
  flex-grow: 1;

  & section {
    width: 100%;
  }
`;
