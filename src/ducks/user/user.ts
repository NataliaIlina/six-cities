import { TUserStore } from 'src/ducks/user/userModels';
import { EStatus } from 'src/models/common';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from 'src/api/user';
import { fetchOffers } from 'src/ducks/hotels/hotels';
import { IUser } from 'src/models/user';

const initialState: TUserStore = {
  user: {
    data: null,
    status: EStatus.IDLE,
  },
};

export const fetchUser = createAsyncThunk('get/user', (args) => getUser());

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (draftState) => {
        draftState.user.status = EStatus.LOADING;
      })
      .addCase(fetchUser.fulfilled, (draftState, action: PayloadAction<IUser>) => {
        draftState.user.status = EStatus.SUCCESS;
        draftState.user.data = action.payload;
      })
      .addCase(fetchUser.rejected, (draftState) => {
        draftState.user.status = EStatus.ERROR;
      });
  },
});

export default userSlice.reducer;
