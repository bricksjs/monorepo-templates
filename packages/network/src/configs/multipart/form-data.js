import { useBase } from '../base';

const base = useBase();

export const useMultipartFormData = () => Object.assign({}, base, {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
