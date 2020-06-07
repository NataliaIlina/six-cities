import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments } from 'src/api/hotels';
import { EStatus } from 'src/constants';
import type { TComment, TCommentsStore } from './commentsModels';

const initialState: TCommentsStore = {
  data: null,
  status: EStatus.IDLE,
};

export const fetchComments = createAsyncThunk<TComment, number>('comments/get', (hotelId) =>
  getComments(hotelId)
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (draftState) => {})
      .addCase(fetchComments.fulfilled, (draftState) => {})
      .addCase(fetchComments.rejected, (draftState) => {});
  },
});

export default commentsSlice.reducer;
