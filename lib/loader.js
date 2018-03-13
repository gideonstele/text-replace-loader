const assign = require('assign-deep');
const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const loaderName = 'text-replace-loader';

const schema = {
  type: 'object',
  properties: {
    prefix: {
      type: 'string'
    },
    replacements: {
      type: 'object',
    }
  }
}
const defaultOptions = {
  prefix: '__',
  replacements: {}
};

module.exports = function(source) {
  options = assign({}, defaultOptions, loaderUtils.getOptions(this));
  validateOptions(schema, options, loaderName);
  const replacements = options.replacements;
  const { prefix } = options;
  for(const key in replacements) {
    const replacement = replacements[key];
    let pattern = prefix + key.trim().toUpperCase() + prefix;
    source = source.replace(new RegExp(pattern,'ig'), replacement);
  }
  return source;
};
