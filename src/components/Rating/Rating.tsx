import React from 'react';
import { Flex } from 'reflexbox';
import type { SpaceProps, WidthProps, HeightProps } from 'styled-system';
import { SStars, SValue } from './Rating.styled';

type TProps = { rating: number; withValue?: boolean } & SpaceProps & WidthProps & HeightProps;

const Rating: React.FC<TProps> = ({
  rating,
  withValue = false,
  width = 147,
  height = 24,
  ...props
}) => (
  <Flex width={width} height={height} {...props}>
    <SStars width={width} height={height}>
      <span style={{ width: `${(rating * 100) / 5}%` }} />
    </SStars>
    {withValue && <SValue>{rating}</SValue>}
  </Flex>
);

export default Rating;
