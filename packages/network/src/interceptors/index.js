import { onRequest } from './onRequest';
import { onRequestError } from './onRequestError';
import { onResponse } from './onResponse';
import { onResponseError } from './onResponseError';

export const useInterceptors = () => {
  return {
    onRequest,
    onRequestError,
    onResponse,
    onResponseError,
  };
};
