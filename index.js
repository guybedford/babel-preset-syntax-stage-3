module.exports = function () {
  return {
    mergeOptions (opts, parserOpts) {
      parserOpts.plugins = parserOpts.plugins.concat(['dynamicImport', 'importMeta', 'asyncGenerators', 'classProperties', 'optionalCatchBinding', 'objectRestSpread', 'numericSeparator']);
    }
  };
};