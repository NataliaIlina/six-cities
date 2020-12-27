import api from 'src/api';
import {TOffer} from 'src/ducks/hotels/hotelsModels';

export const getHotels = (): Promise<TOffer[]> => api.get('/hotels');

export const getFavorite = (): Promise<TOffer[]> => api.get('/favorite');
export const toggleFavoriteStatus = (hotelId: number, status: 1 | 0): Promise<TOffer> =>
  api.post(`/favorite/${hotelId}/${status}`);
