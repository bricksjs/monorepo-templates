import parser from 'ua-parser-js';

const userAgent = window?.navigator?.userAgent.toLowerCase();
export const ua = parser(userAgent);
