import axios from 'axios';
import AuthenticationService from './authentication';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = AuthenticationService.getAccessToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export { default as AuthenticationService } from './authentication';
export { default as GoalService } from './goal';
