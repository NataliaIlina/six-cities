import { IUser } from 'src/models/user';
import { EStatus } from 'src/models/common';

export type TComment = {
  id: number;
  user: IUser;
  rating: number;
  comment: string;
  date: Date;
};

export type TCommentsStore = { list: TComment[] | null; status: EStatus };
