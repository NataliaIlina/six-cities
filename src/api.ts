import axios from 'axios';
import { SERVER_URL } from './constants';
import { transformKeysToCamel } from 'src/helpers';

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  withCredentials: true,
});

const onSuccess = (response) => transformKeysToCamel(response.data);

api.interceptors.response.use(onSuccess);

export default api;
