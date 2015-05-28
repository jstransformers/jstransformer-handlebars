# jstransformer-handlebars

[Handlebars.js](http://handlebarsjs.com/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-handlebars/master.svg)](https://travis-ci.org/jstransformers/jstransformer-handlebars)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-handlebars/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-handlebars?branch=master)
[![Dependency Status](https://img.shields.io/gemnasium/jstransformers/jstransformer-handlebars.svg)](https://gemnasium.com/jstransformers/jstransformer-handlebars)
[![NPM version](https://img.shields.io/npm/v/jstransformer-handlebars.svg)](https://www.npmjs.org/package/jstransformer-handlebars)

## Installation

    npm install jstransformer-handlebars

## API

```js
var foo = require('jstransformer')(require('jstransformer-handlebars'))

var locals = {
  name: "World"
};

foo.render('<h1>Hello {{name}}!</h1>', {}, locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT