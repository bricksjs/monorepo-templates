import { useBase } from '../base';

const base = useBase();

export const useTextPlain = () => Object.assign({}, base, {
  headers: {
    'Content-Type': 'text/plain',
  },
});
