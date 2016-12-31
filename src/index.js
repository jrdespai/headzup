var angular = require('angular');

var hello = require('./app/hello');
require('angular-ui-router');
var routesConfig = require('./routes');

require('angular-ui-bootstrap');

require('./index.less');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', hello);
