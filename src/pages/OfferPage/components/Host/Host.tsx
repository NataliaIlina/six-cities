import React from 'react';
import { STitle } from 'pages/OfferPage/OfferPage.styled';
import { BASE_URL } from 'src/constants';
import { TOffer } from 'src/ducks/hotels/hotelsModels';

const Host: React.FC<{ offer: TOffer }> = ({ offer }) => (
  <div className="property__host">
    <STitle>Meet the host</STitle>
    <div className="property__host-user user">
      <div
        className={`property__avatar-wrapper ${
          offer.host.isPro ? 'property__avatar-wrapper--pro' : ''
        } user__avatar-wrapper`}
      >
        <img
          className="property__avatar user__avatar"
          src={`${BASE_URL}/${offer.host.avatarUrl}`}
          width="74"
          height="74"
          alt="Gallery avatar"
        />
      </div>
      <span className="property__user-name">{offer.host.name}</span>
      {offer.host.isPro ? <span className="property__user-status">Pro</span> : null}
    </div>
    <div className="property__description">
      <p className="property__text">{offer.description}</p>
    </div>
  </div>
);

export default Host;
