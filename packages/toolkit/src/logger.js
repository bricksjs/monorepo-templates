const logPrefix = '【logger】';

export const log = (data) => {
  if (typeof data !== 'object') {
    throw new Error('【logger】logger.log() accepts only objects');
  }

  const logIsOn = globalThis?.localStorage?.getItem('com-logIsOn') || true;
  if (!logIsOn) {
    return;
  }

  console.log(logPrefix, data);
};

export const logger = new Proxy(globalThis.console, {
  get(obj, prop) {
    if (prop === 'log') {
      return log;
    }
    return obj[prop];
  },
});

log({ a: 1, b: 2 });
