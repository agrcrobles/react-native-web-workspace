var path = require('path')

module.exports = ({ platform }, defaults) => {
  return {
    entry: `./index.${platform}.js`,
    devtool: 'source-map',
    resolve: {
      ...defaults.resolve,
      modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    }
  }
};