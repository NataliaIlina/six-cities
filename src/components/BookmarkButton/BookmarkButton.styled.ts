import styled, { css } from 'styled-components';

export const SIcon = styled.svg<{ isActive: boolean }>`
  fill: none;
  stroke: #b8b8b8;
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s;

  path {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.isActive &&
    css`
      stroke: #4481c3;
      fill: #4481c3;
    `}
`;

export const SIconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: color 0.3s, background-color 0.3s;
  outline: 0;
  width: 100%;
  height: 100%;

  &:hover ${SIcon}, &:focus ${SIcon} {
    stroke: #4481c3;
  }
`;
