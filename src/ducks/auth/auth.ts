import { TAuthStore } from './authModels';
import { EStatus } from 'src/models/common';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser, postUser } from 'src/api/user';
import { TUser } from './authModels';

const initialState: TAuthStore = {
  user: {
    data: null,
    status: EStatus.IDLE,
  },
  isUserAuth: false,
};

export const fetchUser = createAsyncThunk<TUser>('get/user', (args) => getUser());
export const authorizeUser = createAsyncThunk<TUser, { email: string; password: string }>(
  'post/user',
  ({ email, password }) => postUser(email, password)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (draftState, action) => {
        draftState.user.status = EStatus.LOADING;
      })
      .addCase(fetchUser.fulfilled, (draftState, action) => {
        draftState.user.status = EStatus.SUCCESS;
        draftState.user.data = action.payload;
        draftState.isUserAuth = true;
      })
      .addCase(fetchUser.rejected, (draftState, action) => {
        draftState.user.status = EStatus.ERROR;
      });

    builder
      .addCase(authorizeUser.pending, (draftState) => {
        draftState.user.status = EStatus.LOADING;
      })
      .addCase(authorizeUser.fulfilled, (draftState, action) => {
        draftState.user.status = EStatus.SUCCESS;
        draftState.user.data = action.payload;
        draftState.isUserAuth = true;
      })
      .addCase(authorizeUser.rejected, (draftState) => {
        draftState.user.status = EStatus.ERROR;
      });
  },
});

export default userSlice.reducer;
