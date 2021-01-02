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
      <SIcon isActive={isActive} xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
      </SIcon>
    </SIconButton>
  </Box>
);

export default BookmarkButton;
