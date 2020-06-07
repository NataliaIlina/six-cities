import { createSelector } from 'reselect';
import { TRootState } from 'src/reducer';

export const getOffers = (state: TRootState) => {
  return state.hotels.offers;
};

export const getFavorite = (state: TRootState) => {
  return state.favorite.data;
};

export const getComments = (state: TRootState) => {
  return state.comments.data;
};

export const getCurrentCity = (state: TRootState) => {
  return state.hotels.currentCity;
};
export const getSorting = (state: TRootState) => {
  return state.hotels.sortingValue;
};

export const getActiveOffer = (state: TRootState) => {
  return state.hotels.activeOffer;
};

export const getCurrentOffer = (state: TRootState, props: any): number => {
  return parseInt(props.match.params.id, 10);
};

export const getCitiesList = createSelector(getOffers, (offers) => {
  const cities = [];
  offers.forEach((offer) => {
    if (!cities.some((city) => city.name === offer.city.name)) {
      cities.push(offer.city);
    }
    return;
  });
  return cities;
});

/*export const getOffersForCurrentCity = createSelector(getOffers, getCurrentCity, (offers, city) =>
  offers.filter((it) => it.city.name === city.name)
);*/

/*export const getOffersByCount = createSelector(
  getOffers,
  getCurrentCity,
  getCurrentOffer,
  (offers, city, currentOfferId) => {
    const currentOffer = offers.find((it) => it.id === currentOfferId);
    const nearOffers = offers
      .filter((it) => it.city.name === city.name && it.id !== currentOfferId)
      .slice(0, 3);
    nearOffers.push(currentOffer);
    return nearOffers;
  }
);

export const getCurrentOfferById = createSelector(
  getOffers,
  getCurrentOffer,
  (offers, currentOffer) => offers.find((offer) => offer.id === currentOffer)
);

export const getOffersForCurrentSorting = createSelector(
  getOffers,
  getCurrentCity,
  getSorting,
  (offers, city, sorting) =>
    offers
      .filter((it) => it.city.name === city.name)
      .sort((a, b) => {
        let sort: number;
        switch (sorting) {
          case `popular`:
            break;
          case `to-high`:
            sort = a.price - b.price;
            break;
          case `to-low`:
            sort = b.price - a.price;
            break;
          case `top-rated`:
            sort = b.rating - a.rating;
            break;
          default:
            break;
        }
        return sort;
      })
);*/
