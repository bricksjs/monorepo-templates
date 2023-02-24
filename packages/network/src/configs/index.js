import { useApplicationJson } from './application/json';
import { useApplicationXWwwFormUrlencoded } from './application/x-www-form-urlencoded';
import { useMultipartFormData } from './multipart/form-data';
import { useTextPlain } from './text/plain';
import { useTextHtml } from './text/html';
import { useTextXml } from './text/xml';
import { useBase } from './base';

export const useConfig = () => ({
  base: useBase(),
  application: {
    json: useApplicationJson(),
    xWwwFormUrlencoded: useApplicationXWwwFormUrlencoded(),
  },
  multipart: {
    formData: useMultipartFormData(),
  },
  text: {
    plain: useTextPlain(),
    html: useTextHtml(),
    xml: useTextXml(),
  },
});
