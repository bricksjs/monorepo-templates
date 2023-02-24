import { useBase } from '../base';

const base = useBase();

export const useTextHtml = () => Object.assign({}, base, {
  headers: {
    'Content-Type': 'text/html',
  },
});
