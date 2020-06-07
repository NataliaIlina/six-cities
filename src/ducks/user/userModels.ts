import type { TAsyncData } from 'src/models/common';
import type { IUser } from 'src/models/user';

export type TUserStore = { user: TAsyncData<IUser> };
