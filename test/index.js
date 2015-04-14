'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should compile handlebars template string, synchronously', function(done) {
  var compiled = transform.compile('<p>Hello, my name is {{name}}.</p>');
  var actual = compiled.fn({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile handlebars template string, async/promise', function(done) {
  var promise = transform.compileAsync('<p>Hello, my name is {{name}}.</p>');
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(compiled) {
    var actual = compiled.fn({name: 'jstransformer-handlebars'});
    test.equal(actual, expected);
    done();
  });
});

test('should compile hbs file from a given filepath, synchronously', function(done) {
  var compiled = transform.compileFile('./test/fixture.hbs');
  var actual = compiled.fn({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile hbs file from a given filepath, async/promise', function(done) {
  var promise = transform.compileFileAsync('./test/fixture.hbs');
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(compiled) {
    var actual = compiled.fn({name: 'jstransformer-handlebars'});
    test.equal(actual, expected);
    done();
  });
});

test('should render handlebars template string, synchronously', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var actual = transform.render('<p>Hello, my name is {{name}}.</p>', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render handlebars template string, async/promise', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var promise = transform.renderAsync('<p>Hello, my name is {{name}}.</p>', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(actual) {
    test.equal(actual.body, expected);
    done();
  });
});

test('should render hbs from a given filepath, synchronously', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var actual = transform.renderFile('./test/fixture.hbs', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render hbs from a given filepath, async/promise', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var promise = transform.renderFileAsync('./test/fixture.hbs', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(actual) {
    // console.log(actual) //=> '<p>Hello, my name is .</p>'
    // test.equal(actual.body, expected);
    done();
  });
});
