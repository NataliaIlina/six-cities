import type { TFavoriteStore } from './favoriteModels';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFavorite, toggleFavoriteStatus as toggleFavoriteStatusRequest } from 'src/api/hotels';
import { EStatus } from 'src/constants';
import { TOffer } from 'src/ducks/hotels/hotelsModels';

const initialState: TFavoriteStore = {
  hotels: {
    data: [],
    status: EStatus.IDLE,
  },
};

export const fetchFavorite = createAsyncThunk<TOffer[]>('favorite/get', (args) => getFavorite());

export const toggleFavoriteStatus = createAsyncThunk<TOffer[], { hotelId: number; status: 1 | 0 }>(
  'favorite/toggleStatus',
  ({ hotelId, status }) => toggleFavoriteStatusRequest(hotelId, status)
);

const offersSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (draftState) => {})
      .addCase(fetchFavorite.fulfilled, (draftState) => {})
      .addCase(fetchFavorite.rejected, (draftState) => {});

    builder
      .addCase(toggleFavoriteStatus.pending, (draftState) => {})
      .addCase(toggleFavoriteStatus.fulfilled, (draftState) => {})
      .addCase(toggleFavoriteStatus.rejected, (draftState) => {});
  },
});

export default offersSlice.reducer;
