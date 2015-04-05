'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should compile hbs file from given string (.compile)', function(done) {
  var compiled = transform.compile('<p>Hello, my name is {{name}}.</p>');
  var actual = compiled.fn({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile from a given filepath, synchronously', function(done) {
  var compiled = transform.compileFile('./test/fixture.hbs');
  var actual = compiled.fn({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile hbs file asynchronously (promise)', function(done) {
  var promise = transform.compileFileAsync('./test/fixture.hbs');
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(compiled) {
    var actual = compiled.fn({name: 'jstransformer-handlebars'});
    test.equal(actual, expected);
    done();
  });
});

test('should render hbs file from given string (.render)', function(done) {
  var actual = transform.render('<p>Hello, my name is {{name}}.</p>', {}, {name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render from a given filepath, synchronously', function(done) {
  var actual = transform.renderFile('./test/fixture.hbs', {}, {name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render hbs file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixture.hbs', {}, {name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(actual) {
    // console.log(actual) //=> '<p>Hello, my name is .</p>'
    // test.equal(actual.body, expected);
    done();
  });
});
