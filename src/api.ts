import axios from 'axios';
import { transformKeysToCamel } from 'src/helpers';
import { SERVER_URL } from './constants';

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  withCredentials: true,
});

const onSuccess = (response) => transformKeysToCamel(response.data);

api.interceptors.response.use(onSuccess);

export default api;
