import axios, {
  AxiosError, AxiosResponse, InternalAxiosRequestConfig,
} from 'axios';
import auth from './auth.api';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

interface ErrorResponse {
  message: string;
}

class ApiError extends Error {
  public code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  toString() {
    return `${this.message}`;
  }
}

axios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const newConfig = config;
  if (newConfig.headers) {
    newConfig.headers.authorization = `Bearer ${localStorage.getItem('token')}` || '';
  }
  return newConfig;
});

axios.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
  const { response } = error;
  if (response && response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Promise.reject(new ApiError('error 401', response.status));
  }
  if (response && response.data) {
    const data = response.data as ErrorResponse;
    if (data.message != null) {
      return Promise.reject(new ApiError(data.message, response.status));
    }
    return Promise.reject(new ApiError('Unknown Error', response.status));
  }
  return Promise.reject(error);
});

export type {
  ApiError,
};

export default {
  auth,
};
