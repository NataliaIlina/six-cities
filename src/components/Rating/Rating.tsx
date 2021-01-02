import React from 'react';
import { Flex } from 'reflexbox';
import type { SpaceProps } from 'styled-system';
import { SStars, SValue } from './Rating.styled';

type TProps = { rating: number; withValue?: boolean } & SpaceProps;

const Rating: React.FC<TProps> = ({ rating, withValue = false, ...props }) => (
  <Flex {...props}>
    <SStars>
      <span style={{ width: `${(rating * 100) / 5}%` }} />
    </SStars>
    {withValue && <SValue>{rating}</SValue>}
  </Flex>
);

export default Rating;
