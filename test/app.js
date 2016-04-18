'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-es-6:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.babelrc',
      '.eslintrc',
      'webpack.config.babel.js',
      'src/app.js',
      'src/tpl/index.html',
      'config/webpack/base.babel.js',
      'config/webpack/build.babel.js',
      'config/webpack/dev.babel.js'
    ]);
  });
});
