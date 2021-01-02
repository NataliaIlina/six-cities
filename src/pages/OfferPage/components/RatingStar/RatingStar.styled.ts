import styled from 'styled-components';

export const SIcon = styled.svg`
  fill: #c7c7c7;
  transition: fill 0.3s;
`;

export const SLabel = styled.label`
  display: block;
  width: 37px;
  height: 33px;
  margin-right: 4px;
  cursor: pointer;

  &:hover ${SIcon}, &:hover ~ label ${SIcon} {
    fill: #ff9000;
  }
`;

export const SInput = styled.input`
  display: none;

  &:checked ~ ${SLabel} ${SIcon} {
    fill: #ff9000;
  }
`;
