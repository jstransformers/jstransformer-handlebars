'use strict';

var Handlebars = require('handlebars');

exports.name = 'handlebars';
exports.outputFormat = 'html';
exports.render = function (source, data) {
  return Handlebars.compile(source)(data);
};
