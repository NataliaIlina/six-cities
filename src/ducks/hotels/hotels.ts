import type { TCity, TOffer, TOffersStore } from './hotelsModels';
import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { getHotels } from 'src/api/hotels';
import { EStatus } from 'src/constants';
import { getCitiesFromOffers } from 'src/helpers';
import { TRootState } from 'src/store';

const initialState: TOffersStore = {
  currentCity: null,
  offers: [],
  cities: [],
  sortingValue: `popular`,
  activeOffer: null,
  status: EStatus.IDLE,
};

export const fetchOffers = createAsyncThunk('offers/get', (args) => getHotels());

const hotelsSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCurrentCity: (draftState, action: PayloadAction<TCity>) => {
      draftState.currentCity = action.payload;
      draftState.activeOffer = null;
    },
    replaceOffer: (draftState, action: PayloadAction<TOffer>) => {
      draftState.offers = draftState.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          return action.payload;
        }
        return offer;
      });
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
      .addCase(fetchOffers.fulfilled, (draftState, action: PayloadAction<TOffer[]>) => {
        draftState.status = EStatus.SUCCESS;
        draftState.offers = action.payload;
        draftState.currentCity = action.payload[0].city;
        draftState.cities = getCitiesFromOffers(action.payload);
      })
      .addCase(fetchOffers.rejected, (draftState) => {
        draftState.status = EStatus.ERROR;
      });
  },
});

export const {
  changeCurrentCity,
  setActiveOffer,
  changeSortingValue,
  replaceOffer,
} = hotelsSlice.actions;

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

export default hotelsSlice.reducer;
