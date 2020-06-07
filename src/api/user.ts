import api from 'src/api';
import { IUser } from 'src/models/user';

export const getUser = (): Promise<IUser> => api.get('/login');
export const postUser = (email: string, password: string): Promise<IUser> =>
  api.post('/login', { email, password });
