'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'version',
      message: 'Your project version',
      default: '1.0.0'
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'Your project author',
      default: ''
    }, {
      type: 'list',
      name: 'license',
      message: 'Your project license',
      choices: ['MIT', 'BSD', 'ISC', 'Apache-2.0', 'UNLICENSED'],
      default: 'ISC'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        author: this.props.author,
        license: this.props.license
      }
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('webpack.config.babel.js'),
      this.destinationPath('webpack.config.babel.js')
    );
    this.fs.copy(
      this.templatePath('config/webpack/base.babel.js'),
      this.destinationPath('config/webpack/base.babel.js')
    );
    this.fs.copy(
      this.templatePath('config/webpack/dev.babel.js'),
      this.destinationPath('config/webpack/dev.babel.js')
    );
    this.fs.copy(
      this.templatePath('config/webpack/build.babel.js'),
      this.destinationPath('config/webpack/build.babel.js')
    );
    this.fs.copy(
      this.templatePath('src/app.js'),
      this.destinationPath('src/app.js')
    );
    this.fs.copy(
      this.templatePath('bs-config.json'),
      this.destinationPath('bs-config.json')
    );
    this.fs.copy(
      this.templatePath('src/tpl/index.html'),
      this.destinationPath('src/tpl/index.html')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
