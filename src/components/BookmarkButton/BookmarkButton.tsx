import React from 'react';
import { Box } from 'reflexbox';
import { SIconButton, SIcon } from './BookmarkButton.styled';

type TProps = {
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: number;
  height?: number;
};

const BookmarkButton: React.FC<TProps> = ({
  isActive,
  onClick,
  width = 17,
  height = 18,
  ...props
}) => (
  <Box width={width} height={height} {...props}>
    <SIconButton type="button" onClick={onClick}>
      <SIcon
        isActive={isActive}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <use xlinkHref="#icon-bookmark" />
      </SIcon>
    </SIconButton>
  </Box>
);

export default BookmarkButton;
