import { http } from '@agro-expo/network';
import { ua } from '@agro-expo/toolkit';

http.get(
  '/api/v1/health',
  {
    params: {
      method: 'get',
      url: '/api/v1/health',
    },
  },
).then((response) => {

});

console.log(ua);
