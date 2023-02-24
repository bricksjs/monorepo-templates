import { useBase } from '../base';

const base = useBase();

export const useApplicationJson = () => Object.assign({}, base, {
  headers: {
    'Content-Type': 'application/json',
  },
});
