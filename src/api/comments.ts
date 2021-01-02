import { TComment } from 'src/ducks/comments/commentsModels';
import api from 'src/api';

export const getComments = (hotelId: number): Promise<TComment[]> =>
  api.get(`/comments/${hotelId}`);

export const postComment = (
  hotelId: number,
  rating: number,
  comment: string
): Promise<TComment[]> => api.post(`/comments/${hotelId}`, { rating, comment });
