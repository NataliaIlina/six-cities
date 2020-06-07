import type { TFavoriteStore } from './favoriteModels';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFavorite } from 'src/api/hotels';
import { EStatus } from 'src/constants';

const initialState: TFavoriteStore = {
  data: [],
  status: EStatus.IDLE,
};
export const fetchFavorite = createAsyncThunk('favorite/get', (args) => getFavorite());

const offersSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (draftState) => {})
      .addCase(fetchFavorite.fulfilled, (draftState) => {})
      .addCase(fetchFavorite.rejected, (draftState) => {});
  },
});

export default offersSlice.reducer;
