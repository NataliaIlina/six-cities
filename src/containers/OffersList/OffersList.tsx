import React from 'react';
import { PlaceCard } from 'src/components';
import { IOffer } from 'src/interfaces';
import { getUserAuth } from 'reducer/user/selectors';
import { connect } from 'react-redux';
import { setActiveOffer, toggleFavoriteStatus } from 'src/actions';
import { TRootState } from 'src/reducer';
import { ComponentProps, OffersListProps } from './types';

const OffersList: React.FC<OffersListProps> = ({
  offers,
  setActiveOffer,
  toggleFavoriteStatus,
  isUserAuth,
}) => (
  <div className='cities__places-list places__list tabs__content'>
    {offers.map((offer: IOffer) => (
      <PlaceCard
        offer={offer}
        key={offer.id}
        setActiveOffer={setActiveOffer}
        toggleFavoriteStatus={toggleFavoriteStatus}
        isUserAuth={isUserAuth}
      />
    ))}
  </div>
);

export default OffersList;
