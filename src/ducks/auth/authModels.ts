import type { TAsyncData } from 'src/models/common';
import type { IUser } from 'src/models/user';

export type TAuthStore = { user: TAsyncData<IUser>; isUserAuth: boolean };
