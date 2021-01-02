import React from 'react';
import { SPrice, SValue, SText } from './Price.styled';

const Price: React.FC<{ price: number }> = ({ price }) => (
  <SPrice>
    <SValue>
      &euro;
      {price}
    </SValue>
    <SText>&nbsp;night</SText>
  </SPrice>
);

export default Price;
