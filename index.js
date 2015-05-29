'use strict';

var Handlebars = require('handlebars');

exports.name = 'handlebars';
exports.inputFormats = ['hbs', 'handlebars'];
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  options = options || {};
  for (var partial in options.partials) {
    Handlebars.registerPartial(partial, options.partials[partial]);
  }
  for (var helper in options.helpers) {
    Handlebars.registerHelper(helper, options.helpers[helper]);
  }
  return Handlebars.compile(str, options);
};
