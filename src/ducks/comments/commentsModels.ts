import type { TAsyncData } from 'src/models/common';
import { IUser } from 'src/models/user';

export type TComment = {
  id: number;
  user: IUser;
  rating: number;
  comment: string;
  date: Date;
};

export type TCommentsStore = TAsyncData<TComment>;
