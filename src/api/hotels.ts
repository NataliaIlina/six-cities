import api from 'src/api';
import { TComment } from 'src/ducks/comments/commentsModels';
import { TOffer } from 'src/ducks/hotels/hotelsModels';

export const getHotels = (): Promise<TOffer[]> => api.get('/hotels');

export const getFavorite = () => api.get('/favorite');

export const getComments = (hotelId: number): Promise<TComment> => api.get(`/comments/${hotelId}`);
export const postComment = (hotelId: number, rating: number, comment: string) =>
  api.post(`/comments/${hotelId}`, { rating, comment });
export const toggleFavoriteStatus = (hotelId: number, status: 1 | 0) =>
  api.post(`/favorite/${hotelId}/${status}`);
