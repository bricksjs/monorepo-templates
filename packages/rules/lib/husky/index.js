const tasks = (arr) => arr.join(' && ');

const hooks = {
  'commit-msg': tasks([
    // 'npm run lint:commit',
  ]),
};

module.exports = hooks;
