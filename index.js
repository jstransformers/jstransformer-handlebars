'use strict'

const Handlebars = require('handlebars')

const transformer = {
  name: 'handlebars',
  inputFormats: ['hbs', 'handlebars'],
  outputFormat: 'html',
  handlebars: Handlebars,
}

transformer.compile = function (source, options) {
  options = options || {}
  for (const partial in options.partials || {}) {
    if (Object.prototype.hasOwnProperty.call(options.partials, partial)) {
      Handlebars.registerPartial(partial, options.partials[partial])
    }
  }

  for (const helper in options.helpers || {}) {
    if (Object.prototype.hasOwnProperty.call(options.helpers, helper)) {
      Handlebars.registerHelper(helper, options.helpers[helper])
    }
  }

  for (const decorator in options.decorators || {}) {
    if (Object.prototype.hasOwnProperty.call(options.decorators, decorator)) {
      Handlebars.registerDecorator(decorator, options.decorator[decorator])
    }
  }

  return Handlebars.compile(source, options)
}

module.exports = transformer
