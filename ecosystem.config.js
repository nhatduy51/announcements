module.exports = [
  {
    script: 'node dist/apps/api/main.js',
    name: 'api',
  },
  {
    script: 'dist/apps/cronjob-vote/main.js',
    name: 'cronjob-vote',
  },
];
