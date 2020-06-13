import type { TAsyncData } from 'src/models/common';

export type TUser = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TAuthStore = { user: TAsyncData<TUser>; isUserAuth: boolean };
