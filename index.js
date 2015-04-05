'use strict';

var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
var bluebird = require('bluebird');
var readFile = bluebird.promisify(fs.readFile);
var readFileSync = fs.readFileSync;

exports.name = 'handlebars';
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
exports.compileFile = function _compileFile(filepath, options) {
  var str = readFileSync(filepath, 'utf8');
  return exports.compile(str, options);
};
exports.compileFileAsync = function _compileFileAsync(filepath, options) {
  return readFile(filepath, 'utf8').then(function(data) {
    return exports.compile(data, options);
  });
};
exports.render = function _render(str, locals, options) {
  var compiled = exports.compile(str, options);
  return compiled(locals);
};
exports.renderFile = function _renderFile(filepath, locals, options) {
  var compiled = exports.compileFile(filepath, options);
  return compiled(locals);
};
exports.renderFileAsync = function _renderFileAsync(filepath, locals, options) {
  var promise = exports.compileFileAsync(filepath, options);

  return promise.then(function(compiled) {
    return compiled(locals);
  })
};
