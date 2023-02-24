import axios from 'axios';
import { useConfig } from './configs';
import { useInterceptors } from './interceptors';

const {
  onRequest, onRequestError, onResponse, onResponseError,
} = useInterceptors();

axios.interceptors.request.use(
  onRequest,
  onRequestError,
);

axios.interceptors.response.use(
  onResponse,
  onResponseError,
);

const { application } = useConfig();
const http = axios.create(application.json);

http.interceptors.request.use(
  onRequest,
  onRequestError,
);

http.interceptors.response.use(
  onResponse,
  onRequestError,
);

export {
  axios,
  http,
};
