import { useBase } from '../base';

const base = useBase();

export const useTextXml = () => Object.assign({}, base, {
  headers: {
    'Content-Type': 'text/xml',
  },
});
