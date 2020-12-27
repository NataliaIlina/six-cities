import api from 'src/api';
import {TUser} from 'src/ducks/auth/authModels';

export const getUser = (): Promise<TUser> => api.get('/login');

export const postUser = (email: string, password: string): Promise<TUser> =>
  api.post('/login', {email, password});
