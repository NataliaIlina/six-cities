import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments, postComment } from 'src/api/hotels';
import { EStatus } from 'src/constants';
import type { TComment, TCommentsStore } from './commentsModels';

const initialState: TCommentsStore = {
  list: null,
  status: EStatus.IDLE,
};

export const fetchComments = createAsyncThunk<TComment[], number>('comments/get', (hotelId) =>
  getComments(hotelId)
);

export const addComment = createAsyncThunk<
  TComment[],
  { hotelId: number; rating: number; comment: string }
>('comments/post', ({ hotelId, rating, comment }) => postComment(hotelId, rating, comment));

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (draftState) => {
        draftState.status = EStatus.LOADING;
      })
      .addCase(fetchComments.fulfilled, (draftState, action) => {
        draftState.status = EStatus.SUCCESS;
        draftState.list = action.payload;
      })
      .addCase(fetchComments.rejected, (draftState) => {
        draftState.status = EStatus.ERROR;
      });

    builder.addCase(addComment.fulfilled, (draftState, action) => {
      draftState.list = action.payload;
    });
  },
});

export default commentsSlice.reducer;
