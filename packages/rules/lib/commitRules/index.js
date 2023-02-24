// .commitlintrc.js
module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // 新特性，新功能
      'fix', // bug修复
      'style', // 代码优化
      'lint', // 修复eslint格式问题
      'build', // 编译前端工程
      'chore', // 工程结构调整
      'refactor', // 重构
      'docs', // 文档更新
      'test', // 测试性的内容
      'remove', // 删除文件等
      'add', // 添加文件等
      'merge', // 分支合并
      'revert', // 提交回退
      'reset', // reset到某次提交
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
