import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError) => {
  const response = error.response?.data.message;

  if (Array.isArray(response)) {
    return response.join(' ');
  }
  return response;
};
