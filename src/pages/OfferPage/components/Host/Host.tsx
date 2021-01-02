import React from 'react';
import { STitle } from 'pages/OfferPage/OfferPage.styled';
import { BASE_URL } from 'src/constants';
import { TOffer } from 'src/ducks/hotels/hotelsModels';
import { SUser, SAvatar, SUserName, SUserStatus, SDescription } from './Host.styled';

const Host: React.FC<{ offer: TOffer }> = ({ offer }) => (
  <div>
    <STitle>Meet the host</STitle>
    <SUser>
      <SAvatar isPro={offer.host.isPro}>
        <img
          src={`${BASE_URL}/${offer.host.avatarUrl}`}
          width="74"
          height="74"
          alt="Gallery avatar"
        />
      </SAvatar>
      <SUserName>{offer.host.name}</SUserName>
      {offer.host.isPro ? <SUserStatus>Pro</SUserStatus> : null}
    </SUser>
    <SDescription>{offer.description}</SDescription>
  </div>
);

export default Host;
