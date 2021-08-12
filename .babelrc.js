var path = require('path');
const jsConfig = require('./jsconfig.json');

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve(".")],
        alias: {
          "@": './src',
          "@lib": './lib'
        }
      },
    ],
    ["@babel/plugin-transform-runtime"]
  ],
};