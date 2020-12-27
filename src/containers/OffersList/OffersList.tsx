import React, { useCallback } from 'react';
import { PlaceCard } from 'src/components';
import { useDispatch, useSelector } from 'src/store';
import { setActiveOffer, toggleFavoriteStatus } from 'src/ducks/hotels/hotels';
import { TOffer } from 'src/ducks/hotels/hotelsModels';

const OffersList: React.FC<{ offers: TOffer[] }> = ({ offers }) => {
  const dispatch = useDispatch();
  const isUserAuth = useSelector((state) => state.auth.isUserAuth);

  const setActiveOfferHandler = useCallback((offer) => {
    dispatch(setActiveOffer(offer));
  }, []);

  const toggleFavoriteStatusHandler = useCallback((hotelId: number, status: 1 | 0) => {
    dispatch(toggleFavoriteStatus({ hotelId, status }));
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          setActiveOffer={setActiveOfferHandler}
          toggleFavoriteStatus={toggleFavoriteStatusHandler}
          isUserAuth={isUserAuth}
        />
      ))}
    </div>
  );
};

export default OffersList;
