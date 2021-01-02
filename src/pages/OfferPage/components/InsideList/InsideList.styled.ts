import styled from 'styled-components';

export const SInsideList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SInsideItem = styled.li`
  position: relative;
  width: 100%;
  max-width: 174px;
  padding-left: 18px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 0;
    width: 12px;
    height: 1px;
    background-color: #000;
  }
`;
