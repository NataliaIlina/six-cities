import React from 'react';

import { Box } from 'reflexbox';
import { STitle } from 'pages/OfferPage/OfferPage.styled';
import { SInsideItem, SInsideList } from './InsideList.styled';

const InsideList: React.FC<{ goods: string[] }> = ({ goods }) => (
  <Box mb={52}>
    <STitle>What&apos;s inside</STitle>
    <SInsideList>
      {goods.map((good) => (
        <SInsideItem key={good}>{good}</SInsideItem>
      ))}
    </SInsideList>
  </Box>
);

export default InsideList;
