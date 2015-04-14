'use strict';

var path = require('path');
var Handlebars = require('handlebars');

exports.name = 'handlebars';
exports.inputFormats = ['hbs', 'handlebars', 'html'];
exports.outputFormat = 'html';

exports.compile = function _compile(str, options) {
  options = options || {};
  for (var partial in options.partials) {
    Handlebars.registerPartial(partial, options.partials[partial]);
  }
  for (var helper in options.helpers) {
    Handlebars.registerHelper(helper, options.helpers[helper]);
  }
  return Handlebars.compile(str, options);
};
exports.render = function _render(str, options, locals) {
  var compiled = exports.compile(str, options);
  return compiled(locals);
};
