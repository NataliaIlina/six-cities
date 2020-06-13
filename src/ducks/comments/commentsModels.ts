import { TUser } from 'src/ducks/auth/authModels';
import { EStatus } from 'src/models/common';

export type TComment = {
  id: number;
  user: TUser;
  rating: number;
  comment: string;
  date: Date;
};

export type TCommentsStore = { list: TComment[] | null; status: EStatus };
