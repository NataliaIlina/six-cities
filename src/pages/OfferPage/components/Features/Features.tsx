import React from 'react';
import { Door, House, People } from 'components/icons';
import type { TOffer } from 'src/ducks/hotels/hotelsModels';
import { SFeatures } from './Features.styled';

type TProps = {
  offer: TOffer;
};

const Features: React.FC<TProps> = ({ offer }) => (
  <SFeatures>
    <li>
      <House />
      {offer.type}
    </li>
    <li>
      <Door />
      {offer.bedrooms} Bedrooms
    </li>
    <li>
      <People />
      Max {offer.maxAdults} adults
    </li>
  </SFeatures>
);

export default Features;
