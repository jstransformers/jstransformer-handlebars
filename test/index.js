'use strict';

var test = require('assertit');
var transform = require('../index');

test('should compile hbs file from given string (.compile)', function(done) {
  var compiled = transform.compile('<p>Hello, my name is {{name}}.</p>');
  var actual = compiled({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile from a given filepath, synchronously', function(done) {
  var compiled = transform.compileFile('./test/fixture.hbs');
  var actual = compiled({name: 'jstransformer-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should compile hbs file asynchronously (promise)', function(done) {
  var promise = transform.compileFileAsync('./test/fixture.hbs');
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(compiled) {
    var actual = compiled({name: 'jstransformer-handlebars'});
    test.equal(actual, expected);
    done();
  });
});
