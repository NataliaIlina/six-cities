import type { TCity, TOffer, TOffersStore } from './hotelsModels';
import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import {
  getFavorite,
  getHotels,
  toggleFavoriteStatus as toggleFavoriteStatusRequest,
} from 'src/api/hotels';
import { EStatus } from 'src/constants';
import { getCitiesFromOffers, transformOffersForFavorite } from 'src/helpers';
import { TRootState } from 'src/store';

const initialState: TOffersStore = {
  currentCity: null,
  offers: [],
  cities: [],
  sortingValue: `popular`,
  activeOffer: null,
  status: EStatus.IDLE,
  favorite: {
    data: null,
    status: EStatus.IDLE,
  },
};

export const fetchOffers = createAsyncThunk('offers/get', (args) => getHotels());
export const fetchFavorite = createAsyncThunk<TOffer[]>('offers/getFavorite', (args) =>
  getFavorite()
);
export const toggleFavoriteStatus = createAsyncThunk<TOffer, { hotelId: number; status: 1 | 0 }>(
  'offers/toggleFavoriteStatus',
  ({ hotelId, status }) => toggleFavoriteStatusRequest(hotelId, status)
);

const hotelsSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCurrentCity: (draftState, action: PayloadAction<TCity>) => {
      draftState.currentCity = action.payload;
      draftState.activeOffer = null;
    },
    setActiveOffer: (draftState, action: PayloadAction<TOffer | null>) => {
      draftState.activeOffer = action.payload;
    },
    changeSortingValue: (draftState, action: PayloadAction<string>) => {
      draftState.sortingValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (draftState) => {
        draftState.status = EStatus.LOADING;
      })
      .addCase(fetchOffers.fulfilled, (draftState, action) => {
        draftState.status = EStatus.SUCCESS;
        draftState.offers = action.payload;
        draftState.currentCity = action.payload[0].city;
        draftState.cities = getCitiesFromOffers(action.payload);
      })
      .addCase(fetchOffers.rejected, (draftState) => {
        draftState.status = EStatus.ERROR;
      });

    builder
      .addCase(fetchFavorite.pending, (draftState) => {
        draftState.favorite.status = EStatus.LOADING;
      })
      .addCase(fetchFavorite.fulfilled, (draftState, action) => {
        draftState.favorite.status = EStatus.SUCCESS;
        draftState.favorite.data = transformOffersForFavorite(action.payload);
      })
      .addCase(fetchFavorite.rejected, (draftState) => {
        draftState.favorite.status = EStatus.ERROR;
      });

    builder.addCase(toggleFavoriteStatus.fulfilled, (draftState, action) => {
      draftState.offers = draftState.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          return action.payload;
        }
        return offer;
      });
    });
  },
});

export const { changeCurrentCity, setActiveOffer, changeSortingValue } = hotelsSlice.actions;

export const offersSelector = createSelector(
  [
    (state: TRootState) => state.hotels.offers,
    (state: TRootState) => state.hotels.currentCity,
    (state: TRootState) => state.hotels.sortingValue,
  ],
  (offers, city, sortingValue) =>
    offers
      .filter((it) => it.city.name === city.name)
      .sort((a, b) => {
        let sort: number;
        switch (sortingValue) {
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
);

export const nearbyOffers = createSelector(
  [
    (state: TRootState) => state.hotels.offers,
    (state: TRootState) => state.hotels.currentCity,
    (state: TRootState) => state.hotels.activeOffer,
  ],
  (offers, city, activeOffer) => {
    const currentOffer = offers.find((it) => it.id === activeOffer?.id);
    const nearOffers = offers
      .filter((it) => it.city.name === city.name && it.id !== activeOffer?.id)
      .slice(0, 3);
    nearOffers.push(currentOffer);
    return nearOffers;
  }
);

export default hotelsSlice.reducer;
