import { useBase } from '../base';

const base = useBase();

export const useApplicationXWwwFormUrlencoded = () => Object.assign({}, base, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
