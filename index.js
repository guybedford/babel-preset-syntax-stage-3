const parserPlugins = ['dynamicImport', 'importMeta', 'asyncGenerators', 'classProperties', 'optionalCatchBinding', 'objectRestSpread', 'numericSeparator'];

module.exports = function () {
  return {
    mergeOptions (opts, parserOpts) {
      parserOpts.plugins = parserOpts.plugins.concat(parserPlugins);
    }
  };
};

module.exports.parserPlugins = parserPlugins;