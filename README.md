# jstransformer-handlebars

[Handlebars.js](http://handlebarsjs.com/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status][ci-badge]][ci-url]
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-handlebars/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-handlebars)
[![NPM version](https://img.shields.io/npm/v/jstransformer-handlebars.svg)](https://www.npmjs.org/package/jstransformer-handlebars)

## Installation

    npm install jstransformer-handlebars

## API

```js
var handlebars = require('jstransformer')(require('jstransformer-handlebars'));

var locals = {
  name: "World"
};

handlebars.render('<h1>Hello {{name}}!</h1>', {}, locals).body
//=> '<h1>Hello World!</h1>'
```

In addition to the standard [Handlebars compile options](https://handlebarsjs.com/api-reference/compilation.html#handlebars-compile-template-options), the render method can be passed objects for `partials`, `helpers` and `decorators` (deprecated).

## License

MIT

[ci-badge]: https://github.com/jstransformers/jstransformer-handlebars/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/jstransformers/jstransformer-handlebars/actions/workflows/test.yml